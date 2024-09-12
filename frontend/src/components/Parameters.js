// import React, { useEffect, useState } from 'react';
import DropdownButton from './DropdownButton';

const Parameters = ({ distribution, id, onSetDistribution, onDelete }) => {

    return (
        <div className="parameters">
            {/*conditionall render the input fields required for each distribution*/}
        </div>
    );
  };

/*
Beta: [a, b, size]
Binomial: [n, p, size]
Chi-Square: [df, size]
Dirichlet: [alpha, size]
Exponential: [scale, size]
F-Distribution: [dfnum, dfden, size]
Gamma: [shape, scale, size]
Geometric: [p, size]
Gumbel: [loc, scale, size]
Hypergeometric: [ngood, nbad, nsample, size]
Laplace: [loc, scale, size]
Logistic: [loc, scale, size]
Lognormal: [mean, sigma, size]
Multinomial: [n, pvals, size]
Multivariate Normal: [mean, cov, size]
Negative Binomial: [n, p, size]
Normal: [mean, stddev, size]
Pareto: [a, size]
Poisson: [lam, size]
Rayleigh: [scale, size]
Standard Normal: [size]
Student's t: [df, size]
Triangular: [left, mode, right, size]
Uniform: [low, high, size]
Weibull: [a, size]
Zipf: [a, size]
*/
  
  export default Parameters;