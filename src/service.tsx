
export const getData = async () => {
    try {
        const response = await fetch("http://localhost:3001/data");
        if (response.ok) {
            const result = await response.json();
            return result;
        } else {
            console.error("Erro ao carregar os dados do backend.");
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
    }

  
};

