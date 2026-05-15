$base = Join-Path $PSScriptRoot "..\public\images"
$images = @{
  "logo.png" = "https://www.olddhoti.com/wp-content/uploads/2025/10/SHIV-Enterprises.png"
  "hero/cutting-cloth.jpg" = "https://www.olddhoti.com/wp-content/uploads/2025/11/Old-Cut-Cloth-Fleece-1.jpg"
  "hero/old-dhoti.jpg" = "https://www.olddhoti.com/wp-content/uploads/2025/11/old01.png"
  "hero/hand-gloves.jpg" = "https://www.olddhoti.com/wp-content/uploads/2025/11/Hand-Glove-7-1-scaled.jpg"
  "about-preview.png" = "https://www.olddhoti.com/wp-content/uploads/2025/11/About.png"
  "about-detail.jpg" = "https://www.olddhoti.com/wp-content/uploads/2025/11/Old-Dhoti-White-2-scaled.jpg"
  "icons/vision.png" = "https://www.olddhoti.com/wp-content/uploads/2025/11/1f5f2c9141dbb78273004942db3809f1b4502c22.png"
  "icons/mission.png" = "https://www.olddhoti.com/wp-content/uploads/2025/10/mission.png"
  "icons/goal.png" = "https://www.olddhoti.com/wp-content/uploads/2025/10/goal.png"
  "why/quality-control.jpg" = "https://www.olddhoti.com/wp-content/uploads/2025/11/standard-quality-control-collage-1024x683.jpg"
  "why/delivery-map.jpg" = "https://www.olddhoti.com/wp-content/uploads/2025/11/map-element-1024x954.jpg"
  "why/business-meeting.jpg" = "https://www.olddhoti.com/wp-content/uploads/2025/11/online-marketing-1024x683.jpg"
  "products/old-dhoti-white.jpg" = "https://www.olddhoti.com/wp-content/uploads/2025/11/Old-Dhoti-White-2-scaled.jpg"
  "products/old-dhoti-colour.png" = "https://www.olddhoti.com/wp-content/uploads/2025/11/IMG_8725.png"
  "products/cutting-cloth-sports.jpg" = "https://www.olddhoti.com/wp-content/uploads/2025/11/Old-Cut-Cloth-Fleece1.jpg"
  "products/cutting-cloth-cotton.jpg" = "https://www.olddhoti.com/wp-content/uploads/2025/11/Old-Cut-Cloth-CP1-1-1.jpg"
  "products/cutting-cloth-cts.jpg" = "https://www.olddhoti.com/wp-content/uploads/2025/11/Old-cut-Cloth-CTS.jpg"
  "products/hand-gloves.jpg" = "https://www.olddhoti.com/wp-content/uploads/2025/11/Hand-Glove-8-1-scaled.jpg"
  "clients/bmw.jpeg" = "https://www.olddhoti.com/wp-content/uploads/2025/11/bmw-150x150.jpeg"
  "clients/djs.webp" = "https://www.olddhoti.com/wp-content/uploads/2025/11/djs-logo-150x150.webp"
  "clients/hyundai.png" = "https://www.olddhoti.com/wp-content/uploads/2025/11/images-1.png"
  "clients/kia.jpeg" = "https://www.olddhoti.com/wp-content/uploads/2025/11/images.jpeg"
  "clients/maruti.jpg" = "https://www.olddhoti.com/wp-content/uploads/2025/11/maruti-logo-maruti-icon-free-free-vector-150x150.jpg"
  "clients/sgm.jpg" = "https://www.olddhoti.com/wp-content/uploads/2025/11/sgm-logo-150x150.jpg"
  "features/quality-1.png" = "https://www.olddhoti.com/wp-content/uploads/2025/11/quality-1.png"
  "features/quality-2.png" = "https://www.olddhoti.com/wp-content/uploads/2025/11/quality-2.png"
  "features/industry.png" = "https://www.olddhoti.com/wp-content/uploads/2025/11/industry.png"
  "blog/blog-1.jpg" = "https://www.olddhoti.com/wp-content/uploads/2026/05/Why-Cotton-Materials.jpg"
  "blog/blog-2.jpg" = "https://www.olddhoti.com/wp-content/uploads/2026/05/IMPROVING-WORKSHOP-EFFICIENCY.jpg"
  "blog/blog-3.jpg" = "https://www.olddhoti.com/wp-content/uploads/2026/05/Maintaining-Engine-Parts-with-Proper-Cleaning-Techniques.jpg"
  "blog/blog-4.jpg" = "https://www.olddhoti.com/wp-content/uploads/2026/05/Why-Cotton-Materials-600x400.jpg"
  "blog/blog-5.jpg" = "https://www.olddhoti.com/wp-content/uploads/2025/11/IMG_8810-600x800.jpg"
  "blog/blog-6.jpg" = "https://www.olddhoti.com/wp-content/uploads/2025/11/Hand-Glove-7-1-600x400.jpg"
  "gallery/gallery-1.jpg" = "https://www.olddhoti.com/wp-content/uploads/2025/11/Old-Dhoti-White-2-600x400.jpg"
  "gallery/gallery-2.jpg" = "https://www.olddhoti.com/wp-content/uploads/2025/11/Old-Cut-Cloth-CP1-1-1-600x800.jpg"
  "gallery/gallery-3.jpg" = "https://www.olddhoti.com/wp-content/uploads/2025/11/Hand-Glove-8-1-600x900.jpg"
  "gallery/gallery-4.jpg" = "https://www.olddhoti.com/wp-content/uploads/2025/11/standard-quality-control-collage-600x400.jpg"
  "gallery/gallery-5.jpg" = "https://www.olddhoti.com/wp-content/uploads/2025/11/Old-Cut-Cloth-Fleece1-600x800.jpg"
  "gallery/gallery-6.jpg" = "https://www.olddhoti.com/wp-content/uploads/2025/11/map-element-600x559.jpg"
  "gallery/gallery-7.jpg" = "https://www.olddhoti.com/wp-content/uploads/2025/11/old01.png"
  "gallery/gallery-8.jpg" = "https://www.olddhoti.com/wp-content/uploads/2025/11/Old-cut-Cloth-CTS-600x450.jpg"
  "gallery/gallery-9.jpg" = "https://www.olddhoti.com/wp-content/uploads/2025/11/About.png"
}

foreach ($item in $images.GetEnumerator()) {
  $outPath = Join-Path $base $item.Key
  $dir = Split-Path $outPath -Parent
  if (!(Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }
  Write-Host "Downloading $($item.Key)..."
  try {
    Invoke-WebRequest -Uri $item.Value -OutFile $outPath -UseBasicParsing
  } catch {
    Write-Host "FAILED: $($item.Key) - $_"
  }
}
Write-Host "Done! Downloaded $($images.Count) images."
