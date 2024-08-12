from django.db import models

# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length = 255)
    link = models.CharField(max_length = 500)
    author = models.CharField(max_length = 255)
    pubDate = models.CharField(max_length = 15)
    description = models.CharField(max_length = 1000)
    isbn = models.CharField(max_length = 15)
    itemId = models.CharField(max_length = 20)
    cover = models.CharField(max_length = 500)
    categoryName = models.CharField(max_length = 255)
    publisher = models.CharField(max_length = 255)

    def __str__(self):
        return f"{self.title} | {self.author}"
