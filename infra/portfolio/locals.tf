locals {
  files_to_upload = fileset("${path.module}/../../dist/portfolio/browser/", "**")
}
