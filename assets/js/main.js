// 页面交互：平滑滚动、批量播放/暂停、对比同时播放
(function () {
  // 平滑滚动到锚点
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length > 1) {
        e.preventDefault();
        const el = document.querySelector(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // 全部播放/暂停
  const playAllBtn = document.querySelector('[data-action="play-all"]');
  const pauseAllBtn = document.querySelector('[data-action="pause-all"]');
  const allVideos = () => Array.from(document.querySelectorAll('video'));

  if (playAllBtn) playAllBtn.addEventListener('click', () => {
    allVideos().forEach(v => { v.play().catch(() => {}); });
  });
  if (pauseAllBtn) pauseAllBtn.addEventListener('click', () => {
    allVideos().forEach(v => v.pause());
  });

  // 对比同时播放/暂停（就近作用于该组）
  document.querySelectorAll('.comparison-pair').forEach(pair => {
    const playBoth = pair.querySelector('[data-action="play-both"]');
    const pauseBoth = pair.querySelector('[data-action="pause-both"]');
    const vids = Array.from(pair.querySelectorAll('video'));
    if (playBoth) playBoth.addEventListener('click', () => {
      vids.forEach(v => { v.currentTime = 0; v.play().catch(() => {}); });
    });
    if (pauseBoth) pauseBoth.addEventListener('click', () => {
      vids.forEach(v => v.pause());
    });
  });

    // LLM 主干对比：按钮切换单个视频源
    (function setupLLMBackboneSwitcher() {
      const player = document.getElementById('llm-backbone-player');
      const buttons = Array.from(document.querySelectorAll('.llm-switcher .btn.toggle'));
      if (!player || buttons.length === 0) return;

      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          // 切换激活态
          buttons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          const src = btn.getAttribute('data-src');
          if (!src) return;

          // 保持播放状态：如果之前在播，切源后继续播放
          const wasPlaying = !player.paused;
          player.pause();
          player.src = src;
          player.load();
          if (wasPlaying) {
            player.play().catch(() => {});
          }
        });
      });
    })();
})();