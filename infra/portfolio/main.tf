module "portfolio-website" {
  source = "git::https://github.com/somasundar-dev/terraform-aws-modules.git//modules/s3_upload?ref=1.0.3"

  region      = var.region
  bucket_name = var.bucket_name

  for_each = local.files_to_upload

  source_path = "${path.module}/../../dist/portfolio/browser/${each.value}"
  key         = each.value
  etag        = filemd5("${path.module}/../../dist/portfolio/browser/${each.value}")
  content_type = lookup(
    {
      "html" = "text/html",
      "css"  = "text/css",
      "js"   = "application/javascript",
      "png"  = "image/png",
      "jpg"  = "image/jpeg",
      "jpeg" = "image/jpeg",
      "gif"  = "image/gif",
      "svg"  = "image/svg+xml",
    },
    split(".", each.value)[length(split(".", each.value)) - 1],
    "application/octet-stream"
  )
}
