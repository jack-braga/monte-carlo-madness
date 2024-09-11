import numpy as np
import matplotlib.pyplot as plt

def monte_carlo_simulation(distribution, params, bins):
    # Dict. mapping distribution strings to NumPy fns
    distributions = {
        'beta': np.random.beta,
        'binomial': np.random.binomial,
        'chisquare': np.random.chisquare,
        'dirichlet': np.random.dirichlet,
        'exponential': np.random.exponential,
        'f': np.random.f,
        'gamma': np.random.gamma,
        'geometric': np.random.geometric,
        'gumbel': np.random.gumbel,
        'hypergeometric': np.random.hypergeometric,
        'laplace': np.random.laplace,
        'logistic': np.random.logistic,
        'lognormal': np.random.lognormal,
        'multinomial': np.random.multinomial,
        'multivariate_normal': np.random.multivariate_normal,
        'negative_binomial': np.random.negative_binomial,
        'normal': np.random.normal,
        'pareto': np.random.pareto,
        'poisson': np.random.poisson,
        'rayleigh': np.random.rayleigh,
        'standard_normal': np.random.standard_normal,
        'standard_t': np.random.standard_t,
        'triangular': np.random.triangular,
        'uniform': np.random.uniform,
        'weibull': np.random.weibull,
        'zipf': np.random.zipf
    }

    if distribution in distributions:
        # Unpack params and call appropriate NumPy distribution fn
        simulation_results = distributions[distribution](*params)
    else:
        raise ValueError(f"Distribution '{distribution}' is not supported.")
    
    # Compute histogram data
    frequencies, bin_edges = np.histogram(simulation_results, bins=bins)
    
    return simulation_results, bin_edges, frequencies

def plot_results(results, bin_edges, frequencies, distribution, params):
    # Plot the histogram of results
    plt.hist(results, bins=bin_edges, edgecolor='black', alpha=0.7)
    plt.title(f'Monte Carlo Simulation\n{distribution.capitalize()} Distribution with params {params}')
    plt.xlabel('Value')
    plt.ylabel('Frequency')
    plt.show()

def main():
    # EXAMPLE:

    # Example params for the triangular distribution
    distribution = 'triangular'
    params = [0, 0.5, 1, 4999]  # [left, mode, right, size]
    
    # Run Monte Carlo simulation
    results, bin_edges, frequencies = monte_carlo_simulation(distribution, params)

    # Display results
    print(f"Mean of simulation: {np.mean(results)}")
    print(f"Standard deviation of simulation: {np.std(results)}")

    # Plot results
    plot_results(results, bin_edges, frequencies, distribution, params)

if __name__ == '__main__':
    main()
