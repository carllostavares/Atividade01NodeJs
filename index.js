import fs from 'fs';
import chalk from 'chalk';

function trataErro (erro){
    console.log(erro);
    throw new Error(chalk.green(erro.code,'NÃO ARQUIVO NO DIRETÓRIO !!'));
}


function pegaArquivo(caminhoDoArquivo){
    const encoding  = 'utf-8';
    fs.promises
    .readFile(caminhoDoArquivo, encoding)
    .then((texto) => console.log(chalk.green(texto)))
    .catch(trataErro)
}

/* function pegaArquivo(caminhoDoArquivo){
    const encoding  = 'utf-8'
    fs.readFile(caminhoDoArquivo, encoding,(erro, texto) =>{
        if(erro){
            trataErro(erro);
        }
        console.log(chalk.red(texto));
    })
} */
pegaArquivo('./arquivos/');


### Olá !! Seja bem vindo ao meu perfil do Github. 👋

- 🔭 Desenvolvedor Back-end Jr.
- 🌱 Estudando: NodeJS, MySQL, JavaScript, CSS, HTML .

 <a href="https://github.com/carllostavares">
  <img height="180em" width="48%" src="https://github-readme-stats.vercel.app/api?username=carllostavares&show_icons=true&theme=dark&include_all_commits=true&count_private=true"/>
  <img height="180em" width="50%" src="https://github-readme-stats.vercel.app/api/top-langs/?username=carllostavares&layout=compact&langs_count=7&theme=dark"/>
</div>

## Técnologias em Desenvolvimento: 
<div style="display: inline_block"><br>
  <img align="center" alt="madeira-nodejs" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg"> 
  <img align="center" alt="madeira-mysql" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg">
  <img align="center" alt="madeira-js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">  
  <img align="center" alt="madeira-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="madeira-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
</div>

  
## Contatos
<div>
  <a href="https://www.instagram.com/kopilando/" target="_blank"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
  <a href = "mailto:carlostavares.dev256@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alvo ="_blank"></a>
  <a href="https://www.linkedin.com/in/carlos-tavares-jr-b49595b6/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
</div>
