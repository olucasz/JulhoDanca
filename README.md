# Julho para Jesus - Ministério de Dança

Biblioteca digital privada para videoaulas e repertório do Ministério de Dança Julho para Jesus.

O projeto usa apenas HTML, CSS e JavaScript Vanilla. Não existe build, npm ou dependência obrigatória. Para publicar, basta enviar os arquivos para a pasta `public_html` da hospedagem.

## Estrutura

```text
/
index.html
README.md
css/style.css
js/app.js
js/data.js
assets/logo/
assets/audio/
assets/images/covers/
assets/images/videos/
```

## Como trocar músicas

Edite o arquivo `js/data.js`.

Cada música fica dentro da lista `songs`:

```js
{
  id: "deus-e-por-nos",
  title: "Deus É por Nós",
  artist: "Tons de Adoração",
  duration: "05:12",
  audio: "assets/audio/deus-e-por-nos.mp3",
  cover: "assets/images/covers/deus-e-por-nos.jpg"
}
```

Depois, coloque o arquivo de áudio na pasta `assets/audio/` e a capa na pasta `assets/images/covers/`.

## Como trocar vídeos

No mesmo arquivo `js/data.js`, edite a lista `videoLessons`.

Cada música pode ter várias aulas:

```js
{
  songId: "deus-e-por-nos",
  songTitle: "Deus É por Nós",
  lessons: [
    {
      id: "aula-1",
      title: "Aula 1 — Introdução",
      duration: "18:32",
      thumbnail: "assets/images/videos/aula-1.jpg",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID"
    }
  ]
}
```

Para usar um vídeo do YouTube, copie o ID do vídeo e coloque no formato:

```text
https://www.youtube.com/embed/ID_DO_VIDEO
```

## Como trocar thumbnails

Coloque as imagens das aulas em `assets/images/videos/`.

Depois atualize o campo `thumbnail` da aula no `js/data.js`:

```js
thumbnail: "assets/images/videos/minha-aula.jpg"
```

Use imagens horizontais, de preferência no formato 16:9.

## Como publicar na Hostinger

1. Acesse o painel da Hostinger.
2. Abra o gerenciador de arquivos.
3. Entre na pasta `public_html`.
4. Envie todos os arquivos e pastas deste projeto para `public_html`.
5. Abra o domínio no navegador.

Não rode build. Não instale npm. Não é necessário configurar servidor especial.

## Observações

- O player de áudio usa a API nativa do navegador.
- Ao fechar o modal de vídeo, o iframe é removido para interromper a reprodução.
- Para adicionar novas músicas ou aulas, edite apenas `js/data.js` e envie os novos arquivos para as pastas em `assets/`.
