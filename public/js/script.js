<script>
      function startScrollAnimation() {
          const scrollingContent = document.getElementById('scrollingContent');
          scrollingContent.style.animation = 'none';
          void scrollingContent.offsetWidth;
          scrollingContent.style.animation = null; 
          scrollingContent.style.animationPlayState = 'running';
          setTimeout(() => {
              scrollingContent.classList.add('hidden');
          }, 15000);
      };
      document.addEventListener('DOMContentLoaded', function () {
          startScrollAnimation();
      });
      setInterval(function () {
          updateDateTime();
          const scrollingContent = document.getElementById('scrollingContent');
          scrollingContent.classList.remove('hidden');
          startScrollAnimation();
      }, 60000);
</script>