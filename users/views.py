from django.shortcuts import render
from django.views.generic import TemplateView


# Create your views here.

# 클래스 기반 뷰 (TemplateView)
class IndexView(TemplateView):
    template_name = "index.html"