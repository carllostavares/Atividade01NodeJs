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

pegaArquivo('./arquivos/');
pegaArquivo('./arquivos/texto.md');

//  \[[^[\]]*?\]/