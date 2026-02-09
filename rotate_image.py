from PIL import Image
import os

image_path = "frontend/src/assets/lpevents/startup_expo_memories/mem4.png"

try:
    img = Image.open(image_path)
    # Rotate 270 degrees clockwise (or -90) which is 90 degrees counter-clockwise?
    # Usually "rotate" implies fixing orientation. If it's sideways, 90 or -90 is needed.
    # Let's try -90 (270) first as that's common for phone pics.
    # Actually, let's just rotate -90 (which is 270 clockwise)
    rotated_img = img.rotate(180, expand=True)
    rotated_img.save(image_path)
    print(f"Successfully rotated {image_path}")
except Exception as e:
    print(f"Error rotating image: {e}")
