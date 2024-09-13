# monte-carlo-madness
![Logo](./frontend/src/assets/mcmLogo.png)

What?
- Python backend, React frontend; simple Monte Carlo Simulation/Analysis

TODO:
- My plan is to have a react app that:
- allows you to create a number of variables
- have those variables be any of a wide range of distributions
- allow the distributions to rely upon one another (addition by default, but optionally multiplication)

Backend Commands:
- Precursor:
    ```
    cd backend
    ```
- Demo the monte carlo simulation calculations:
    ```
    python3 calc.py
    ```
- Start backend:
    ```
    python3 app.py
    ```

Frontend Commands:
- Precursor:
    ```
    cd frontend
    ```
- Start dev server:
    ```
    npm start
    ```
- Bundles the app into static files for production:
    ```
    npm run build
    ```
- Starts the test runner:
    ```
    npm test
    ```
- Removes this tool and copies build dependencies, configuration files and scripts into the app directory. If you do this, you can’t go back!:
    ```
    npm run eject
    ```