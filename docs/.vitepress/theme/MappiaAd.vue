<template>
  <div class="mappia-ad">
    <a href="https://mappia.io" target="_blank" rel="noopener noreferrer">
      <div class="mappia-ad-header">
        <img src="https://docs.mappia.io/logo.svg" alt="Mappia" class="mappia-ad-logo" />
        <span class="mappia-ad-title">Mappia</span>
      </div>
      <span class="mappia-ad-desc">Run Magento in production on your own Kubernetes cluster.</span>
      <span class="mappia-ad-btn">Learn more</span>
    </a>
  </div>
</template>

<style scoped>
.mappia-ad {
  margin-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 1.5rem;
}

.mappia-ad a {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  text-decoration: none;
  color: inherit;
  border-radius: 8px;
  padding: 16px 12px;
  background: var(--vp-c-bg-soft);
  transition: border-color 0.25s;
  border: 1px solid transparent;
  line-height: 1.5;
}

.mappia-ad a:hover {
  border-color: var(--vp-c-divider);
}

.mappia-ad-header {
  display: flex;
  align-items: center;
  gap: 8px;
}

.mappia-ad-logo {
  width: 20px;
  height: auto;
}

.mappia-ad-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  line-height: 1.4;
}

.mappia-ad-desc {
  font-size: 12px;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}

.mappia-ad-btn {
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  color: var(--vp-c-brand);
  border: 1px solid var(--vp-c-brand);
  border-radius: 4px;
  padding: 4px 12px;
  margin-top: 4px;
  transition: background 0.25s, color 0.25s;
}

.mappia-ad a:hover .mappia-ad-btn {
  background: var(--vp-c-brand);
  color: #fff;
}

.mappia-ad-label {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: var(--vp-c-text-3);
  text-transform: uppercase;
}
</style>
