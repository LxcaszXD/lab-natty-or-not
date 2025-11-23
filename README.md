# 🧠 Natty or Not – IA que Avalia um *Shape* (Físico)

Este projeto utiliza a API **Gemini (Google AI)** para analisar descrições físicas e emitir um veredito: **Natty** (natural) ou **Not** (provavelmente utilizando recursos externos 😅).

Ele foi desenvolvido para ser executado via terminal, usando **Node.js**, e retorna uma análise rápida e direta.

## 🚀 Funcionalidades

  * Envia uma **descrição do *shape*** para a API Gemini.
  * Recebe a análise em um formato estruturado:
      * **Veredito:** `Natty` ou `Not`
      * **Justificativa** curta
  * Pode ser usado passando a descrição diretamente na **linha de comando**.

## 📦 Requisitos

  * **Node.js** **18** ou superior.
    > ⚠️ *Se estiver usando Node 16 ou anterior, você precisará instalar `node-fetch` manualmente.*

## 🔑 Criando sua API Key

Para utilizar a API Gemini, você precisa de uma chave:

1.  Acesse o **Google AI Studio**:
    [https://aistudio.google.com](https://aistudio.google.com)
2.  Faça login.
3.  Vá para a seção **API Keys**.
4.  Crie uma nova chave de uso.
5.  **Guarde o valor da chave** (você precisará dele na próxima etapa).

## 📁 Instalação

1.  Clone o repositório:

    ```bash
    git clone https://github.com/LxcaszXD/lab-natty-or-not.git
    ```

2.  Entre na pasta do projeto:

    ```bash
    cd natty-or-not
    ```

## ⚙️ Configurando a Variável de Ambiente

Você deve configurar sua chave como uma variável de ambiente chamada `API_KEY` antes de rodar o script.

> ⚠️ **Substitua `SUA_API_KEY_AQUI` pela chave que você gerou.**

  * **Windows (PowerShell):**
    ```bash
    $env:API_KEY="SUA_API_KEY_AQUI"
    ```
  * **Windows (CMD):**
    ```bash
    set API_KEY=SUA_API_KEY_AQUI
    ```
  * **Linux / Mac:**
    ```bash
    export API_KEY="SUA_API_KEY_AQUI"
    ```
    
    **Para Verificar:**

  * **Windows (PowerShell):**
    ```bash
    echo $env:API_KEY
    ```
  * **Windows (CMD):**
    ```bash
    echo %API_KEY%
    ```
  * **Linux / Mac:**
    ```bash
    echo $API_KEY
    ```

-----

## ▶️ Como Rodar o Projeto

### Rodando com a descrição padrão

Se você rodar o script sem argumentos, ele usará uma descrição pré-definida no código.

```bash
node script.js
```

### Enviando uma descrição manualmente

Passe a descrição física como argumento, entre aspas:

```bash
node script.js "Homem 1.80m, 110kg, 5% BF, dorsal detalhada"
```

### Exemplo de Retorno

```
📌 Resultado:

- Veredito: Not
- Justificativa: níveis extremos de definição e volume...
```

-----

## 🧩 Compatibilidade com Node 16 ou Inferior

Se a sua versão do Node.js for **16 ou inferior**, você precisará instalar o `node-fetch`:

1.  Instale a dependência:

    ```bash
    npm install node-fetch
    ```

2.  Adicione a linha de importação no topo do seu `script.js`:

    ```javascript
    import fetch from "node-fetch";
    ```

-----

## 📜 Estrutura do Projeto

```
lab-natty-or-not/
 └──README.md
 └── script.js
```

## 🧠 Como Funciona

1.  O script (`script.js`) captura a descrição (padrão ou fornecida via argumento).
2.  O script envia o prompt formatado para o modelo **Gemini** através da API.
3.  A API retorna o julgamento (`Natty` ou `Not`) e a justificativa.
4.  O terminal exibe o resultado formatado.