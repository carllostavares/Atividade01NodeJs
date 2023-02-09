import fs from 'fs';
import chalk from 'chalk';

function trataErro (erro){
    console.log(erro);
    throw new Error(chalk.green(erro.code,'NÃO ARQUIVO NO DIRETÓRIO !!'));
}

//ASYNC/AWAIT

async function pegaArquivo(caminhoDoArquivo){
    try {
        const encoding = 'utf-8';
        const texto =  await fs.promises.readFile(caminhoDoArquivo,encoding)
        console.log(chalk.blue(texto));
    } catch (erro) {
        trataErro(erro)
    } finally {
        console.log(chalk.yellow('operação concluída'));
      }
}

//Promesssas com then()

/* function pegaArquivo(caminhoDoArquivo){
    const encoding  = 'utf-8';
    fs.promises
    .readFile(caminhoDoArquivo, encoding)
    .then((texto) => console.log(chalk.green(texto)))
    .catch(trataErro)
}
 */

pegaArquivo('./arquivos/');
pegaArquivo('./arquivos/texto.md');
