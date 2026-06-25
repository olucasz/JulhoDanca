(function () {
  "use strict";

  var accordion = document.getElementById("videoLessonsAccordion");
  var modal = document.getElementById("videoModal");
  var modalTitle = document.getElementById("modalTitle");
  var modalPlayer = document.getElementById("modalPlayer");
  var audio = document.getElementById("audioPlayer");
  var currentCover = document.getElementById("currentCover");
  var currentTitle = document.getElementById("currentTitle");
  var currentArtist = document.getElementById("currentArtist");
  var currentTime = document.getElementById("currentTime");
  var totalTime = document.getElementById("totalTime");
  var progressTrack = document.getElementById("progressTrack");
  var progressFill = document.getElementById("progressFill");
  var playPause = document.getElementById("playPause");
  var previousSong = document.getElementById("previousSong");
  var nextSong = document.getElementById("nextSong");
  var songList = document.getElementById("songList");
  var playerStatus = document.getElementById("playerStatus");
  var siteHeader = document.querySelector(".site-header");
  var menuButton = document.querySelector(".mobile-menu-button");
  var mobileNav = document.querySelector(".mobile-nav");

  var state = {
    currentSongIndex: 0,
    lastFocusedElement: null
  };

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function getSongById(songId) {
    return songs.find(function (song) {
      return song.id === songId;
    });
  }

  function pluralizeLessons(count) {
    return count === 1 ? "1 parte" : count + " partes";
  }

  function parseDuration(duration) {
    var parts = String(duration || "0:00").split(":").map(Number);
    if (parts.length === 2) {
      return parts[0] * 60 + parts[1];
    }
    if (parts.length === 3) {
      return parts[0] * 3600 + parts[1] * 60 + parts[2];
    }
    return 0;
  }

  function formatTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) {
      return "0:00";
    }

    var wholeSeconds = Math.floor(seconds);
    var minutes = Math.floor(wholeSeconds / 60);
    var remainingSeconds = wholeSeconds % 60;
    return minutes + ":" + String(remainingSeconds).padStart(2, "0");
  }

  function renderVideoLessons() {
    if (!accordion || !Array.isArray(videoLessons)) {
      return;
    }

    accordion.innerHTML = videoLessons
      .map(function (group, groupIndex) {
        var isOpen = groupIndex === 0;
        var panelId = "lesson-panel-" + escapeHtml(group.songId);
        var triggerId = "lesson-trigger-" + escapeHtml(group.songId);
        var lessons = group.lessons
          .map(function (lesson, lessonIndex) {
            return (
              '<button class="lesson-card" type="button" data-lesson-id="' +
              escapeHtml(lesson.id) +
              '" data-song-id="' +
              escapeHtml(group.songId) +
              '">' +
              '<span class="lesson-media">' +
              '<img src="' +
              escapeHtml(lesson.thumbnail) +
              '" alt="" loading="lazy" width="480" height="270">' +
              '<span class="lesson-play" aria-hidden="true">' +
              '<svg viewBox="0 0 24 24" focusable="false"><path d="M8 5v14l11-7L8 5Z"/></svg>' +
              "</span>" +
              '<span class="lesson-duration">' +
              escapeHtml(lesson.duration) +
              "</span>" +
              "</span>" +
              '<span class="lesson-title">' +
              escapeHtml(lesson.title) +
              "</span>" +
              "</button>"
            );
          })
          .join("");

        return (
          '<article class="accordion-item' +
          (isOpen ? " is-open" : "") +
          '">' +
          '<button class="accordion-trigger" id="' +
          triggerId +
          '" type="button" aria-expanded="' +
          String(isOpen) +
          '" aria-controls="' +
          panelId +
          '">' +
          '<span class="trigger-title"><span class="status-dot" aria-hidden="true"></span><span>' +
          escapeHtml(group.songTitle) +
          "</span><small>" +
          pluralizeLessons(group.lessons.length) +
          "</small></span>" +
          '<span class="chevron" aria-hidden="true"></span>' +
          "</button>" +
          '<div class="accordion-panel" id="' +
          panelId +
          '" role="region" aria-labelledby="' +
          triggerId +
          '">' +
          '<div class="lesson-grid">' +
          lessons +
          "</div>" +
          "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  function findLesson(songId, lessonId) {
    var group = videoLessons.find(function (item) {
      return item.songId === songId;
    });

    if (!group) {
      return null;
    }

    return group.lessons.find(function (lesson) {
      return lesson.id === lessonId;
    });
  }

  function toggleAccordion(trigger) {
    var item = trigger.closest(".accordion-item");
    var isOpen = item.classList.contains("is-open");

    item.classList.toggle("is-open", !isOpen);
    trigger.setAttribute("aria-expanded", String(!isOpen));
  }

  function openVideoModal(lesson) {
    if (!lesson || !modal || !modalPlayer) {
      return;
    }

    var separator = lesson.videoUrl.indexOf("?") === -1 ? "?" : "&";
    var src = lesson.videoUrl + separator + "autoplay=1&rel=0";

    state.lastFocusedElement = document.activeElement;
    modalTitle.textContent = lesson.title;
    modalPlayer.innerHTML =
      '<iframe src="' +
      escapeHtml(src) +
      '" title="' +
      escapeHtml(lesson.title) +
      '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    modal.classList.remove("is-hidden");
    document.body.classList.add("modal-open");

    var closeButton = modal.querySelector(".modal-close");
    if (closeButton) {
      closeButton.focus();
    }
  }

  function closeVideoModal() {
    if (!modal) {
      return;
    }

    modal.classList.add("is-hidden");
    modalPlayer.innerHTML = "";
    document.body.classList.remove("modal-open");

    if (state.lastFocusedElement && typeof state.lastFocusedElement.focus === "function") {
      state.lastFocusedElement.focus();
    }
  }

  function renderSongList() {
    if (!songList || !Array.isArray(songs)) {
      return;
    }

    songList.innerHTML = songs
      .map(function (song, index) {
        return (
          '<button class="track-item" type="button" role="option" data-song-index="' +
          index +
          '" aria-selected="false">' +
          '<span class="track-number">' +
          (index + 1) +
          "</span>" +
          '<img src="' +
          escapeHtml(song.cover) +
          '" alt="" loading="lazy" width="52" height="52">' +
          '<span class="track-copy"><strong>' +
          escapeHtml(song.title) +
          "</strong><small>" +
          escapeHtml(song.artist) +
          "</small></span>" +
          '<span class="track-duration">' +
          escapeHtml(song.duration) +
          "</span>" +
          "</button>"
        );
      })
      .join("");
  }

  function getCurrentSong() {
    return songs[state.currentSongIndex];
  }

  function setPlayerStatus(message) {
    playerStatus.textContent = message || "";
  }

  function getDisplayDuration(song) {
    if (audio.duration && Number.isFinite(audio.duration)) {
      return audio.duration;
    }

    return parseDuration(song.duration);
  }

  function updateSelectedTrack() {
    var trackItems = songList.querySelectorAll(".track-item");
    trackItems.forEach(function (item) {
      var selected = Number(item.dataset.songIndex) === state.currentSongIndex;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-selected", String(selected));
    });
  }

  function updateProgress() {
    var song = getCurrentSong();
    var duration = getDisplayDuration(song);
    var progress = duration > 0 ? (audio.currentTime / duration) * 100 : 0;

    progressFill.style.width = Math.min(progress, 100) + "%";
    currentTime.textContent = formatTime(audio.currentTime);
    totalTime.textContent = song.duration || formatTime(duration);
  }

  function loadSong(index, shouldPlay) {
    var nextIndex = (index + songs.length) % songs.length;
    var song = songs[nextIndex];

    state.currentSongIndex = nextIndex;
    audio.src = song.audio;
    audio.load();

    currentCover.src = song.cover;
    currentCover.alt = "";
    currentTitle.textContent = song.title;
    currentArtist.textContent = song.artist;
    totalTime.textContent = song.duration;
    currentTime.textContent = "0:00";
    progressFill.style.width = "0%";
    setPlayerStatus("");
    updateSelectedTrack();
    updatePlayButton(false);

    if (shouldPlay) {
      playCurrentSong();
    }
  }

  function updatePlayButton(isPlaying) {
    playPause.classList.toggle("is-playing", isPlaying);
    playPause.setAttribute("aria-label", isPlaying ? "Pausar" : "Reproduzir");
  }

  function playCurrentSong() {
    var playPromise = audio.play();

    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(function () {
        setPlayerStatus("Não foi possível reproduzir este arquivo de áudio.");
        updatePlayButton(false);
      });
    }
  }

  function seekAudio(event) {
    var song = getCurrentSong();
    var duration = getDisplayDuration(song);

    if (!duration) {
      return;
    }

    var rect = progressTrack.getBoundingClientRect();
    var position = (event.clientX - rect.left) / rect.width;
    var nextTime = Math.max(0, Math.min(duration, duration * position));

    try {
      audio.currentTime = nextTime;
    } catch (error) {
      setPlayerStatus("Carregue um áudio válido para usar a barra de progresso.");
    }

    updateProgress();
  }

  function setMobileMenuState(isOpen) {
    if (!menuButton || !mobileNav) {
      return;
    }

    menuButton.classList.toggle("is-open", isOpen);
    mobileNav.classList.toggle("is-open", isOpen);
    if (siteHeader) {
      siteHeader.classList.toggle("is-menu-open", isOpen);
    }
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    mobileNav.setAttribute("aria-hidden", String(!isOpen));
  }

  function bindMobileMenu() {
    if (!menuButton || !mobileNav) {
      return;
    }

    menuButton.addEventListener("click", function () {
      setMobileMenuState(!menuButton.classList.contains("is-open"));
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMobileMenuState(false);
      });
    });

    document.addEventListener("click", function (event) {
      if (
        menuButton.classList.contains("is-open") &&
        siteHeader &&
        !siteHeader.contains(event.target)
      ) {
        setMobileMenuState(false);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        setMobileMenuState(false);
      }
    });
  }

  function bindEvents() {
    accordion.addEventListener("click", function (event) {
      var trigger = event.target.closest(".accordion-trigger");
      var lessonCard = event.target.closest(".lesson-card");

      if (trigger) {
        toggleAccordion(trigger);
      }

      if (lessonCard) {
        var lesson = findLesson(lessonCard.dataset.songId, lessonCard.dataset.lessonId);
        openVideoModal(lesson);
      }
    });

    modal.addEventListener("click", function (event) {
      if (event.target.closest("[data-close-modal]")) {
        closeVideoModal();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !modal.classList.contains("is-hidden")) {
        closeVideoModal();
      }
    });

    playPause.addEventListener("click", function () {
      if (audio.paused) {
        playCurrentSong();
      } else {
        audio.pause();
      }
    });

    previousSong.addEventListener("click", function () {
      loadSong(state.currentSongIndex - 1, true);
    });

    nextSong.addEventListener("click", function () {
      loadSong(state.currentSongIndex + 1, true);
    });

    songList.addEventListener("click", function (event) {
      var item = event.target.closest(".track-item");

      if (item) {
        loadSong(Number(item.dataset.songIndex), true);
      }
    });

    progressTrack.addEventListener("click", seekAudio);
    progressTrack.addEventListener("keydown", function (event) {
      var song = getCurrentSong();
      var duration = getDisplayDuration(song);
      var step = event.shiftKey ? 15 : 5;

      if (!duration) {
        return;
      }

      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        audio.currentTime = Math.max(
          0,
          Math.min(duration, audio.currentTime + (event.key === "ArrowRight" ? step : -step))
        );
        updateProgress();
      }
    });

    audio.addEventListener("play", function () {
      setPlayerStatus("");
      updatePlayButton(true);
    });

    audio.addEventListener("pause", function () {
      updatePlayButton(false);
    });

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", updateProgress);
    audio.addEventListener("ended", function () {
      loadSong(state.currentSongIndex + 1, true);
    });

    audio.addEventListener("error", function () {
      updatePlayButton(false);
      setPlayerStatus("Arquivo de áudio não encontrado. Confira o caminho em js/data.js.");
    });
  }

  function init() {
    bindMobileMenu();

    if (!Array.isArray(songs) || songs.length === 0) {
      setPlayerStatus("Nenhuma música cadastrada.");
      return;
    }

    renderVideoLessons();
    renderSongList();
    bindEvents();
    loadSong(0, false);
  }

  init();
})();
