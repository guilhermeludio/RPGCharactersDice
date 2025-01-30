
export const getData = async () => {
    try {
        const response = await fetch("https://rpgcharactersdice.onrender.com/data");
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

