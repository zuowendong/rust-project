<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { getAllFileNamesInDirectory } from "./hooks/file";

const directoryPath = "D:\\Desktop";
getAllFileNamesInDirectory(directoryPath).then((fileNames) => {
  console.log("Files in the directory:", fileNames);
});
</script>

<template>
  <div data-tauri-drag-region style="cursor: grab">
    Only this element can drag the window
  </div>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <!-- <RouterView /> -->
</template>
