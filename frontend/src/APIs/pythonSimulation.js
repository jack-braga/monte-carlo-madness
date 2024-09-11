export const simulateMonteCarlo = async (distribution, params, bins) => {
    try {
      const response = await fetch('http://localhost:5000/simulate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          distribution: distribution,
          params: params,
          bins: bins,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
  
      const data = await response.json();
      console.log('Simulation results:', data);
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };
  