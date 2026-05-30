terraform {
  backend "s3" {
    bucket  = "somasundar-dev-terraform-state-bucket"
    key     = "prod/portfolio-website/terraform.tfstate"
    region  = "ap-south-1"
    encrypt = true
  }
}
