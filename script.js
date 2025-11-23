// Lê a variável de ambiente da API
const API_KEY = process.env.API_KEY;

// Caso a API_KEY não esteja definida, encerra o programa
if (!API_KEY) {
  console.error("ERRO: Defina a variável de ambiente API_KEY.");
  process.exit(1);
}

// Pega a descrição passada como argumento no terminal
// Caso não seja passada, usa a descrição padrão
const descricao =
  process.argv.slice(2).join(" ") ||
  "110kg, 5% BF, ombros extremamente redondos e costas muito densas";

// Prompt que instrui o modelo sobre como responder
const systemPrompt = `
Você é um especialista em fisiculturismo e avalia se alguém parece NATURAL (NATTY) ou NÃO com base no físico, descrição e medidas.

Responda no formato:
- Veredito: Natty ou Not
- Justificativa curta
`;

async function main() {
  try {
    // Chamada para a API do Gemini
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-latest:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: systemPrompt + "\n\n" + descricao }],
            },
          ],
        }),
      }
    );

    // Converte a resposta para JSON
    const data = await response.json();

    // Pega o texto retornado pela API (tratando diferentes formatos possíveis)
    const texto =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      data?.candidates?.[0]?.content?.[0]?.parts?.[0]?.text ||
      JSON.stringify(data, null, 2);

    console.log("\n Resultado:\n");
    console.log(texto, "\n");
  } catch (err) {
    // Caso aconteça um erro na requisição
    console.error(" ERRO NA API:", err);
  }
}

// Executa a função principal
main();
