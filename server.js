const http = require("http");
const { url } = require("inspector");

const estiloGlobal = `
    <style>
        body {
            background-color: #f4f7f6;
            color: #333;
            max-width: 800px;
            margin: 40px auto;
            padding: 20px;
            line-height: 1.6;
        }
        h1 {
            color: #006699;
            border-bottom: 2px solid #006699;
            padding-bottom: 8px;
        }
        h2 {
            color: #2c3e50;
            margin-top: 20px;
        }
        p {
            font-size: 1.05rem;
            text-align: justify;
        }
        a {
            display: inline-block;
            margin: 6px 0;
            color: #006699;
            text-decoration: none;
            font-weight: bold;
            transition: color 0.2s;
        }
        a:hover {
            color: #004080;
            text-decoration: underline;
        }
        .container {
            background: #ffffff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        }
    </style>
`;

const servidorLauro = http.createServer((request, response) => {

    if(request.url === "/"){

        response.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        })

        response.end(`
            ${estiloGlobal}
            <h1>VisitLauro</h1>
            <p>Explore a maior e mais desenvolvida cidade da RMS!</p> 

            <h2>Conheça as belezas da nossa cidade</h2>

            <div>
            <a href="/historia">Nossa história</a>
            <br>
            <a href="/informacoes">Informações</a>
            <br>
            <a href="/cultura">Nossa cultura</a>
            <br>
            <a href="/gastronomia">Nossa comida</a>
            <br>
            <a href="/pontos-turisticos">Pontos Turisticos</a>
            <br>
            <a href="/api/cidade">Dados da cidade</a>
            </div>
        `)

    } else if(request.url === "/historia"){

        response.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        })

        response.end(`
            ${estiloGlobal}
            <h1>Nossa História</h1>

            <p> Lauro de Freitas, na Região Metropolitana de Salvador, tem suas origens em 1552 com a fundação da Aldeia de São João de Ipitanga por jesuítas. O objetivo inicial era a catequese dos indígenas e a ocupação das terras ao redor do Rio Ipitanga. <br>
            A fertilidade da região impulsionou a agricultura, a pecuária e o surgimento de grandes engenhos de açúcar. Em 1608, começou a construção da histórica Igreja Matriz de Santo Amaro de Ipitanga, marco central do povoado. Devido à sua relevância e crescimento, em 1880 o local foi elevado à categoria de distrito de Salvador, <br>
            adotando o nome de Santo Amaro de Ipitanga. Por décadas, a região funcionou como uma extensão rural e área de veraneio para os moradores da capital baiana. A grande virada histórica aconteceu em 31 de julho de 1962, quando o distrito conquistou sua emancipação política. Na mesma data, a cidade foi rebatizada como Lauro de Freitas em homenagem a um influente político e engenheiro baiano. <br>
            Lauro Farani de Freitas havia falecido tragicamente em um acidente aéreo em 1950, comovendo a população local. <br>
            A partir da década de 1970, o município passou por um intenso processo de modernização e urbanização acelerada. A abertura da Estrada do Coco ligou definitivamente a cidade ao litoral norte e facilitou o acesso rodoviário. O boom imobiliário e comercial transformou a antiga vila agrícola em um dos polos econômicos mais dinâmicos do estado. Atualmente, destaca-se pelo forte setor de serviços, comércio vibrante e pelo turismo em praias famosas como Vilas do Atlântico e Buraquinho. <br>
            Lauro de Freitas hoje concilia perfeitamente o crescimento urbano acelerado com a preservação de suas ricas raízes coloniais.</p>
            <br>
            <a href="/">Voltar</a>
        `)
    } else if(request.url === "/informacoes"){

        response.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        })

        response.end(`
            ${estiloGlobal}
            <h1>Transporte e Mobilidade</h1>
            <p>Se você quer a outros locais rapidamente na nossa cidade, conheça o Terminal Aeroporto onde você poderá viajar de ônibus.</p>
            <br>
            <h1>Trâsito</h1>
            <p>O fluxo de veículos na Estrada do Coco e na divisa com a capital pode ser intenso em horários de pico e fins de semana.</p>
            <br>
            <h1>Cuidado nas Praias!</h1>
            <p>Quando você se banhar em várias das nossas praias tome cuidado ao entrar no mar, as vezes a força da água pode ser um impecilho.</p>
            <br>
            <a href="/">Voltar</a>
        `)
    } else if(request.url === "/cultura"){

        response.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        })

        response.end(`
            ${estiloGlobal}
            <h1>Nossa Cultura</h1>
            <h1>Manifestações Tradicionais</h1>
            <h2>Capoeira</h2>
            <p>O município abriga uma das maiores e mais ativas comunidades de praticantes de capoeira da região</p>
            <br>
            <h2>Festas Populares</h2>
            <p> Destacam-se eventos tradicionais como a Micareta de Portão, que movimenta a cidade com grandes atrações da Bahia, além de festas de largo e projetos culturais nos bairros</p>
            <br>
            <h2>Literatura e Dança</h2>
            <p> Há um crescimento de produções literárias infantis, espetáculos de dança, poesia e teatro impulsionados por instituições e artistas da cidade.</p>
            <br>
            <a href="/">Voltar</a>
        `)
    } else if(request.url === "/gastronomia"){

        response.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        })

        response.end(`
            ${estiloGlobal}
            <h1>Nossa Comida</h1>
            <h1>Comidas Típicas</h1>
            <h2>Moqueca Baiana</h2>
            <p>Preparada com peixe fresco ou frutos do mar, azeite de dendê, leite de coco, coentro e pimenta, servida com arroz e pirão.</p>
            <br>
            <h2>Acarajé e Abará</h2>
            <p>Bolinhos de feijão-fradinho fritos no dendê ou cozidos no vapor, recheados com vatapá, caruru e camarão seco.</p>
            <br>
            <h2>Caranguejo e Lambreta</h2>
            <p>Petiscos clássicos à beira da praia e em barzinhos da região, cozidos com temperos locais.</p>    
            <br>
            <a href="/">Voltar</a>
        `)
    } else if(request.url === "/pontos-turisticos"){

        response.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        })

        response.end(`
            ${estiloGlobal}
            <h1>Pontos Turísticos</h1>
            <h1>Nossas Belas Praias</h1>
            <h2>Praia de Buraquinho</h2>
            <p>Fica no limite norte e marca o encontro das águas do Rio Joanes com o mar, formando um cenário paradisíaco com coqueirais e piscinas naturais na maré baixa.</p>
            <br>
            <h2>Praia de Vilas do Atlântico</h2>
            <p> É a mais famosa, com calçadão, ciclovia, boa infraestrutura e piscinas naturais relaxantes durante a maré baixa.</p>
            <br>
            <h2>Praia de Ipitanga</h2>
            <p> Conhecida pela extensa faixa de areia, ótimas ondas para a prática de surfe e formação de piscinas naturais.</p>
            <br>
            <a href="/">Voltar</a>
        `)
    } else if(request.url === "/api/cidade"){
        response.writeHead(200, {
            "Content-Type": "application/json; charset=utf-8"
        })

        const dadosLauro = {
            nome: "Lauro de Freitas",
            estado: "Bahia",
            populacao: "203.000+",
            principaisPraias: ["Vilas do Atlântico", "Buraquinho", "Ipitanga"]
        }

        response.end(JSON.stringify(dadosLauro))

    } else {
    response.writeHead(404, {
        "Content-Type": "text/html; charset=utf-8"
    });
    response.end(`
        <h1>Erro 404</h1>
        <p>A página que você procurou não existe.</p>
        <a href="/">Voltar para o início</a>
    `);
}

});

servidorLauro.listen(3000);
console.log("Servidor Iniciado em http://localhost:3000");