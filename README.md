# Inteli - Instituto de Tecnologia e Liderança

<p  align="center">
<a  href= "https://www.inteli.edu.br/"><img  src="https://www.inteli.edu.br/wp-content/uploads/2021/08/20172028/marca_1-2.png"  alt="Inteli - Instituto de Tecnologia e Liderança"  border="0"></a>
</p>

# IPTRACKER

## Solução IoT para o Instituto de Pesquisas Tecnológicas (IPT)

## Integrantes

<a  href="https://www.linkedin.com/in/abner-silva-barbosa-8a3542225/"> Abner Silva Barbosa</br></a>
<a  href="https://www.linkedin.com/in/alberto-da-rocha-miranda-angrysine/">Alberto da Rocha Miranda</br></a>
<a  href="https://www.linkedin.com/in/amanda-fontes/">Amanda Ribeiro Fontes</br></a>
<a  href="https://www.linkedin.com/in/gabrielriostorres/">Gabriel Rios Torres</br></a>
<a  href="https://www.linkedin.com/in/liviapcoutinho/">Livia Lopes Coutinho</br></a>
<a  href="https://www.linkedin.com/in/paulo-evangelista/">Paulo Presa Evangelista</br></a>
<a  href="https://www.linkedin.com/in/pedro-hagge/">Pedro Hagge Baptista</br></a>

## Descrição

Os representantes do IPT chegaram ao Inteli apresentando o seguinte problema: o instituto apresenta, atualmente, R$187 milhões em máquinas e equipamentos em seu ativo. Este valor abrange aproximadamente 20.000 itens, dos quais 4000 necessitam ser monitorados. Diante dessa situação, acrescenta-se o fato de que, por tratar-se de uma empresa pública, o IPT é, periodicamente, submetido a auditorias, entre elas: Secretaria da Fazenda do Estado de São Paulo, Tribunal de Contas do Estado, auditoria independente, auditorias de financiadores de projetos (FINEP, EMBRAPII, BNDES etc). Frequentemente, os auditores necessitam ver o ativo in loco (no próprio local) e, muitas vezes, os equipamentos não encontram-se no endereço informado no sistema. Logo, a fim de mitigar o problema supracitado, espera-se o desenvolvimento de um dispositivo que possa ser acoplado nos principais ativos do IPT para que a localização deles possa ser monitorada por meio da rede interna, ou seja, o desenvolvimento de dispositivo para localização real dos ativos por meio de IoT.

## 🛠 Estrutura de pastas

:file_folder: documentos▾
&emsp; :file_folder: antigos</br>

:file_folder: ESP32_Codigo▾
&emsp; :file_folder: Beacon
&emsp; :file_folder: sketch_oct31a
&emsp; :file_folder: tocaBuzzer</br>

:file_folder: src▾
&emsp; :file_folder: Backend▾
&emsp; &emsp; :file_folder: configs▾
&emsp; &emsp; &emsp; :file_folder: esp-32▾
&emsp; &emsp; &emsp; &emsp; :file_folder: src
&emsp; &emsp;  :file_folder: controllers
&emsp; &emsp; :file_folder: Middlewares
&emsp; &emsp; :file_folder: Models
&emsp; &emsp; :file_folder: Routes
&emsp; &emsp; :file_folder: services</br>

:file_folder: frontend ▾
&emsp; &emsp; :file_folder: components▾
&emsp; &emsp; &emsp; :file_folder: Bateria
&emsp; &emsp; &emsp; :file_folder: buscaId
&emsp; &emsp; &emsp; :file_folder: ContainerEquipamentos
&emsp; &emsp; &emsp; :file_folder: EquipamentosBloco
&emsp; &emsp; &emsp; :file_folder: Historico
&emsp; &emsp; &emsp; :file_folder: Layout
&emsp; &emsp; &emsp; :file_folder: ModalPredio
&emsp; &emsp; &emsp; :file_folder: Notificacao
&emsp; &emsp; &emsp; :file_folder: Predio
&emsp; &emsp; &emsp; :file_folder: Sala
&emsp; &emsp; &emsp; :file_folder: TipoNotificacao
&emsp; &emsp; :file_folder: pages▾
&emsp; &emsp; &emsp; :file_folder: admin
&emsp; &emsp; &emsp; :file_folder: equipamentos
&emsp; &emsp; &emsp; :file_folder: salas
&emsp; &emsp; :file_folder: public
&emsp; &emsp; :file_folder: styles  
&emsp;  :file_folder: postmanCollection</br>
  
Dentre os arquivos presentes na raiz do projeto, definem-se:

**readme.md**: arquivo que serve como guia e explicação geral sobre o projeto (o mesmo que você está lendo agora).

**.gitignore**: arquivo que faz com que o GitHub ignore os arquivos que não devem ser inseridos no repositório.

**documentos**: aqui estarão o IoTDoc e Manual de Instruções do projeto.

**src**: nesta pasta encontra-se todo o código-fonte dos embarcados, front-end e back-end.


## 💻 Configuração para Desenvolvimento

Foi desenvolvida uma aplicação em <a href="https://nextjs.org/docs">Next.js</a> para que a solução IoT pudesse ser manipulada por seus respectivos usuários. Essa aplicação pode ser acessada conforme as instruções contidas abaixo.

Primeiramente, é necessária a instalação e configuração do <a href="https://nodejs.org/en/download/">Node.js</a>. Posteriormente, este repositório deve ser clonado e aberto em um editor de código, como o Visual Studio Code.

Uma vez que o projeto é aberto no editor, deve-se abrir o Terminal Integrado na pasta "src/frontend" e digitar o seguinte comando:

    npm run dev

Por fim, o link http://localhost:3000/ será exibido. É necessário acessá-lo em seu navegador para acessar o projeto. Desse modo, o projeto poderá ser modificado.  

## 🗃 Histórico de lançamentos


**1.0 — 21/10/2022 (Sprint I)**

* Análises de negócios

* Entendimento da experiência do usuário

* Arquitetura da solução (Versão 1)


**2.0 — 04/11/2022 (Sprint II)**

* Protótipo de interface do usuário (Figma)

* Arquitetura da Solução (Versão 2)

* Documentação das saídas

* Código fonte do sistema (Versão 1)

* Bloco central (Versão 1)
  

**3.0 — 18/11/2022 (Sprint III)**

* Arquitetura da Solução (Versão 3)

* Código fonte do sistema (Versão 2)

* Documentação das saídas e interações

* Bloco central (Versão 2) e externos


**4.0 — 02/12/2022 (Sprint IV)**

* Documentação das saídas, interações e respostas

* Código fonte do sistema (Versão 3)

* Bloco central (Versão 3) — sistema completo
  

**5.0 — 16/12/2022 (Sprint V)**

* Documentação refinada e seções opcionais

* Código fonte do sistema (Versão Final)

* Sistema completo construído (Versão Final)
  
  

## 📋 Licença/License

<img  style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"  src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img  style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"  src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1">

<p  xmlns:cc="http://creativecommons.org/ns#"  xmlns:dct="http://purl.org/dc/terms/"><a  property="dct:title"  rel="cc:attributionURL"  href="https://github.com/Spidus/Teste_Final_1">Solução IoT para o Instituto de Pesquisas Tecnológicas</a> by <a  rel="cc:attributionURL dct:creator"  property="cc:attributionName"  href="https://www.yggbrasil.com.br/vr">Inteli, Abner Silva Barbosa, Alberto da Rocha Miranda, Amanda Ribeiro Fontes, Gabriel Rios Torres, Livia Lopes Coutinho, Paulo Presa Evangelista, Pedro Hagge Baptista</a> is licensed under <a  href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1"  target="_blank"  rel="license noopener noreferrer"  style="display:inline-block;">Attribution 4.0 International</a>.</p>

  

## 🎓 Referências

Abaixo, encontram-se as referências utilizadas no projeto.

**1**. GEOLOCALIZAÇÃO: tipos de dispositivos e vantagens de uso. OneDayTesting. Disponível em: https://blog.onedaytesting.com.br/geolocalizacao-tipos-vantagens/. Acesso em: 13 out. 2022

**2**. DORE, Elder. O que é geolocalização: como essa tecnologia revolucionou o cotidiano de tantas pessoas e empresas? Maplink, 4 mar. 2020. Disponível em: https://maplink.global/blog/o-que-e-geolocalizacao/. Acesso em: 13 out. 2022

**3**. CONHEÇA 4 opções de localizadores inteligentes. Tecmundo, 27 mai. 2021. Disponível em: https://www.tecmundo.com.br/produto/218134-conheca-4-opcoes-localizadores-inteligentes.htm. Acesso em: 13 out 2022.

**4**. LOCALIZAÇÃO Indoor: conheça 4 aplicações e tecnologias. Athene, 16 abr. 2021. Disponível em: https://athenetec.com/localizacao-indoor/. Acesso em: 13 out 2022.

**5**. QUAIS as tecnologias de monitoramento indoor mais atuais e suas vantagens? Lifelink, 10 out. 2022. Disponível em: https://lifelink.com.br/blog/posts/tecnologias-de-monitoramento-indoor/. Acesso em: 13 out. 2022.

**6**. SOBRE o IPT. Instituto de Pesquisas Tecnológicas. Disponível em: https://www.ipt.br/institucional. Acesso em: 03 nov. 2022.