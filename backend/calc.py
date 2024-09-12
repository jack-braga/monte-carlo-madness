import numpy as np
import matplotlib.pyplot as plt

# NEED TO ADD SIZE AND BIN SLIDERS TBD
def monte_carlo_simulation(variable, size):
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

    if variable['distribution'] in distributions:
        # Unpack params and call appropriate NumPy distribution fn
        simulation_results = distributions[variable['distribution']](*variable['parameters'])
    else:
        raise ValueError(f"Distribution '{variable['distribution']}' is not supported.")
    
    return simulation_results

def sum_simulations(variables, size, bins):
    # Initialize the sum array
    sum_results = np.zeros(size)

    print(f"SUM length: {len(sum_results)}, SUM type: {type(sum_results)}, SUM shape: {sum_results.shape}")    
    
    for variable in variables:
        # Run simulation for each variable
        results = monte_carlo_simulation(variable, size)

        print(f"Results length: {len(results)}, Results type: {type(results)}, Results shape: {results.shape}")
        
        # Ensure the simulation results are of the correct size
        if len(results) != size:
            raise ValueError(f"Simulation result size {len(results)} does not match expected size {size}.")
        
        # Add the results to the sum array
        # sum_results += results
        sum_results = np.add(sum_results, results)
    
    # Compute histogram data
    frequencies, bin_edges = np.histogram(sum_results, bins=bins)

    return sum_results, bin_edges, frequencies

def plot_results(results, bin_edges, frequencies):
    # Plot the histogram of results
    plt.hist(results, bins=bin_edges, edgecolor='black', alpha=0.7)
    plt.title(f'Monte Carlo Simulation\n Distribution with params YYY')
    plt.xlabel('Value')
    plt.ylabel('Frequency')
    plt.show()

def main():
    # Example variables array from JSON
    variables = [
        {"distribution": 'normal', "parameters": [0, 1, 2130], "id": 1726117462867.638},
        {"distribution": 'exponential', "parameters": [1, 2130], "id": 1726117758016.6326},
        {"distribution": 'triangular', "parameters": [0, 0.5, 1, 2130], "id": 1726117758945.9055}
    ]
    
    # Run Monte Carlo simulations and sum the results
    sum_results, bin_edges, frequencies = sum_simulations(variables, 2130, 50)
    
    # Display results
    print(f"Mean of summed simulation: {np.mean(sum_results)}")
    print(f"Standard deviation of summed simulation: {np.std(sum_results)}")
    
    # Plot the summed results
    plot_results(sum_results, bin_edges, frequencies)

if __name__ == '__main__':
    main()
