# Julho para Jesus - Ministério de Dança

Espaço de preparação com repertório e coreografias do Ministério de Dança Julho para Jesus.

O projeto usa apenas HTML, CSS e JavaScript Vanilla. Não existe build, npm ou dependência obrigatória. Para publicar, basta enviar os arquivos para a pasta `public_html` da hospedagem.

## Estrutura

```text
/
index.html
.htaccess
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

## Como trocar coreografias

No mesmo arquivo `js/data.js`, edite a lista `videoLessons`.

Cada música pode ter várias partes:

```js
{
  songId: "deus-e-por-nos",
  songTitle: "Deus É por Nós",
  lessons: [
    {
      id: "parte-1",
      title: "Parte 1 — Introdução",
      duration: "18:32",
      thumbnail: "assets/images/videos/parte-1.jpg",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID"
    }
  ]
}
```

Para usar um vídeo do YouTube, copie o ID do vídeo e coloque no formato:

```text
https://www.youtube.com/embed/ID_DO_VIDEO
```

Para Vimeo, use o formato player:

```text
https://player.vimeo.com/video/ID_DO_VIDEO
```

## Como trocar thumbnails

Coloque as imagens das partes ou sequências em `assets/images/videos/`.

Depois atualize o campo `thumbnail` no `js/data.js`:

```js
thumbnail: "assets/images/videos/minha-parte.jpg"
```

Use imagens horizontais, de preferência no formato 16:9.

## Boas práticas para mídia

- Use MP3 comprimido para músicas sempre que possível.
- Evite arquivos de áudio muito grandes.
- Use thumbnails JPG ou WebP otimizadas.
- Prefira thumbnails 1280x720 ou 854x480.
- Evite PNG pesado para thumbnails.
- Não suba vídeos diretamente na Hostinger.
- Use YouTube ou Vimeo para vídeos.
- Para YouTube, use link embed no campo `videoUrl`.
- Para Vimeo, use `player.vimeo.com` no campo `videoUrl`.
- Se um vídeo do YouTube der erro por copyright, teste subir no Vimeo.
- Se possível, use vídeos sem áudio original protegido e deixe a música no player.

## Como trocar a imagem da entrada

Substitua o arquivo `assets/images/hero-dance-bg.jpg` por outra imagem com o mesmo nome.

A imagem é usada de forma discreta no fundo da entrada do site, com overlay escuro e vermelho aplicado pelo CSS.

## Como publicar na Hostinger

1. Acesse o painel da Hostinger.
2. Abra o gerenciador de arquivos.
3. Entre na pasta `public_html`.
4. Envie todos os arquivos e pastas deste projeto para `public_html`.
5. Abra o domínio no navegador.

Não rode build. Não instale npm. Não é necessário configurar servidor especial.

## Atualizando o site sem problema de cache

O projeto usa uma versão global para forçar celulares e navegadores antigos a baixarem arquivos novos quando o site for atualizado.

Quando alterar CSS, JavaScript, imagens, capas, thumbnails ou áudios, atualize a versão em `index.html` e em `js/data.js`.

No `js/data.js`, altere a versão atual para uma versão nova:

```js
const ASSET_VERSION = "VERSAO_NOVA";
```

No `index.html`, use a mesma versão nos arquivos locais carregados com query string:

```html
<link rel="stylesheet" href="css/style.css?v=VERSAO_NOVA">
<script src="js/data.js?v=VERSAO_NOVA"></script>
<script src="js/app.js?v=VERSAO_NOVA"></script>
```

Exemplo: se a versão atual for `20260626`, na próxima publicação use `20260627` ou outra versão nova.

Essa troca faz o navegador tratar os arquivos como novas URLs e baixar a versão mais recente. Não adicione `?v=` em links externos do YouTube ou Vimeo.

## Como melhorar carregamento na Hostinger

O projeto inclui um arquivo `.htaccess` na raiz.

Ele orienta hospedagens Apache, como a Hostinger, a revalidar o HTML, manter CSS e JS em cache moderado, e manter imagens, SVGs, fontes e áudios em cache por mais tempo. Isso ajuda thumbnails, logos e músicas a carregarem mais rápido depois do primeiro acesso.

O HTML principal não recebe cache agressivo. As atualizações de CSS, JS e mídia são controladas pela versão `?v=`.

## Observações

- O player de áudio usa a API nativa do navegador.
- Ao fechar o modal de vídeo, o iframe é removido para interromper a reprodução.
- Para adicionar novas músicas, partes ou sequências, edite apenas `js/data.js` e envie os novos arquivos para as pastas em `assets/`.
