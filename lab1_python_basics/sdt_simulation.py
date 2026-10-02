"""Equal-variance Gaussian signal detection simulation.

BEFORE RUNNING:
Install: python -m pip install numpy scipy matplotlib

MAKE SURE: 
    1) You are in the same directory as this file
    2) You are using the same Python environment where you installed the packages

THEN you can run: python sdt_simulation.py

The criterion is lambda: a z-score relative to the NOISE mean
Noise ~ N(0, 1); signal ~ N(d_prime, 1)
Response is YES when the observation >= criterion and NO otherwise
Optimal midpoint-centered bias is c = criterion - d_prime / 2
"""

import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import norm

# Prints conditional response rates and returns plot
def simulate(d_prime, criterion, n=100_000, seed=42):

    rng = np.random.default_rng(seed)
    noise = rng.normal(loc=0, scale=1, size=n)
    signal = rng.normal(loc=d_prime, scale=1, size=n)

    hits = np.count_nonzero(signal >= criterion)
    false_alarms = np.count_nonzero(noise >= criterion)
    rows = [
        ("Hit", hits, norm.sf(criterion - d_prime)),
        ("Miss", n - hits, norm.cdf(criterion - d_prime)),
        ("False alarm", false_alarms, norm.sf(criterion)),
        ("Correct rejection", n - false_alarms, norm.cdf(criterion)),
    ]
    print(f"\nNoise: mean = 0, SD = 1; Signal: mean = {d_prime:g}, SD = 1")
    print(f"Criterion (noise z): {criterion:g}")
    print(f"Criterion (signal z): {criterion - d_prime:g}")
    print(f"Midpoint-centered bias c: {criterion - d_prime / 2:g}")
    print(f"Trials: {n:,} noise + {n:,} signal\n")
    print(f"{'Response':<20} {'Count':>10} {'Simulated rate':>17} {'Exact rate':>14}")
    for name, count, probability in rows:
        print(f"{name:<20} {count:>10,d} {count/n:>17.4%} {probability:>14.4%}")
    print("\nHits/misses: denominator = signal trials.")
    print("False alarms/correct rejections: denominator = noise trials.")

    lo = min(0, d_prime, criterion) - 4
    hi = max(0, d_prime, criterion) + 4
    x = np.sort(np.append(np.linspace(lo, hi, 3000), criterion))
    fig, axes = plt.subplots(2, 1, figsize=(10, 7), sharex=True, sharey=True)
    panels = [
        (axes[0], noise, 0, "Noise trials", "Correct rejection", "False alarm",
         norm.cdf(criterion), norm.sf(criterion)),
        (axes[1], signal, d_prime, "Signal trials", "Miss", "Hit",
         norm.cdf(criterion - d_prime), norm.sf(criterion - d_prime)),
    ]
    for ax, samples, mean, title, left_name, right_name, left_p, right_p in panels:
        density = norm.pdf(x, loc=mean, scale=1)
        ax.hist(samples, bins=80, density=True, color="gray", alpha=0.18,
                label="Simulated observations")
        ax.plot(x, density, color="#243746", linewidth=2, label="Gaussian density")
        ax.fill_between(x, density, where=x <= criterion, color="#3b82f6",
                        alpha=0.35, label=f"{left_name}: {left_p:.2%}")
        ax.fill_between(x, density, where=x >= criterion, color="#f59e0b",
                        alpha=0.40, label=f"{right_name}: {right_p:.2%}")
        ax.axvline(criterion, color="black", linestyle="--", label="Criterion")
        ax.set(title=title, ylabel="Probability density", xlim=(lo, hi))
        ax.legend(loc="upper right", fontsize=8)
        ax.spines[["top", "right"]].set_visible(False)
    axes[1].set_xlabel("Evidence (z relative to noise mean); respond 'signal' to the right of criterion")
    fig.suptitle(f"Equal-variance SDT: d′ = {d_prime:g}, criterion λ = {criterion:g}\n"
                 "Shaded-area labels show exact conditional probabilities")
    fig.tight_layout()
    return fig


if __name__ == "__main__":
    try:
        d_prime = float(input("Enter d-prime (ex. 2): "))
        criterion = float(input("Enter criterion in noise z units (ex. 1): "))
        n = int("100000")
        simulate(d_prime, criterion, n)
        plt.show()
    except ValueError as error:
        raise SystemExit(f"Invalid input: {error}")
