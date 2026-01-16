const fs = require("fs-extra");
const path = require("path");

// 🔴 EXACT TARGET FOLDER
const TARGET_DIR = "D:/Akshat/Ecell/Temp/Ecell_Web/frontend/src/assets";

const VALID_EXTENSIONS = new Set([".png", ".jpg", ".jpeg"]);

async function walkAndDelete(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await walkAndDelete(fullPath); // 🔁 recursive
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();

      if (
        VALID_EXTENSIONS.has(ext) &&
        entry.name.includes("-old")
      ) {
        await fs.remove(fullPath);
        console.log(`🗑️ Deleted: ${fullPath}`);
      }
    }
  }
}

(async () => {
  console.log("🔥 Cleanup started");
  console.log("📂 Target:", TARGET_DIR);

  if (!(await fs.pathExists(TARGET_DIR))) {
    console.error("❌ assets folder not found");
    process.exit(1);
  }

  await walkAndDelete(TARGET_DIR);

  console.log("✅ Cleanup finished");
})();
