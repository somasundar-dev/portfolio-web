module "portfolio-website" {
  source = "git::https://github.com/somasundar-dev/terraform-aws-modules.git//apps/website?ref=1.0.0"

  project_name = "portfolio"
  environment  = var.environment
  region       = var.region
  domain_name  = var.domain_name
}
