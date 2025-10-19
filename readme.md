# Champions League API

API RESTful para consulta, cadastro, atualização e remoção de jogadores e clubes relacionados à Champions League. Desenvolvida em Node.js com TypeScript e Express.

## Funcionalidades

- Listar clubes participantes da Champions League
- Listar jogadores, consultar por ID, cadastrar, atualizar estatísticas e remover
- Dados de clubes e jogadores armazenados em arquivos JSON

## Endpoints

### Clubes
- `GET /api/clubs` — Lista todos os clubes

### Jogadores
- `GET /api/players` — Lista todos os jogadores
- `GET /api/players/:id` — Consulta jogador por ID
- `POST /api/players` — Cadastra novo jogador
- `PATCH /api/players/:id` — Atualiza estatísticas do jogador
- `DELETE /api/players/:id` — Remove jogador

## Estrutura dos Dados

### Clube
```json
{
	"id": 1,
	"name": "Real Madrid"
}
```

### Jogador
```json
{
	"id": 1,
	"name": "Lionel Messi",
	"club": "Inter Miami",
	"nationality": "Argentina",
	"position": "Forward",
	"statistics": {
		"Overall": 93,
		"Pace": 80,
		"Shooting": 92,
		"Passing": 91,
		"Dribbling": 95,
		"Defending": 34,
		"Physical": 65
	}
}
```

## Instalação

```bash
git clone https://github.com/IAccost/champions-league-api.git
cd champions-league-api
npm install
```

## Executando o Projeto

### Desenvolvimento
```bash
npm run start:dev
```

### Watch Mode
```bash
npm run start:watch
```

### Produção
```bash
npm run start:dist
```

O servidor estará disponível em `http://localhost:3000` ou na porta configurada no env.

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- CORS

## Estrutura do Projeto

```
src/
	app.ts
	server.ts
	routes.ts
	controllers/
		clubs-controller.ts
		players-controllers.ts
	data/
		clubs.json
		players.json
	models/
		club-model.ts
		player-model.ts
		statistics-model.ts
		http-response-model.ts
	repositories/
		clubs-repository.ts
		players-repository.ts
	services/
		clubs-service.ts
		players-service.ts
	utils/
		http-helper.ts
```

## Autor

Projeto desenvolvido por [IAccost](https://github.com/IAccost).

## Licença

ISC
