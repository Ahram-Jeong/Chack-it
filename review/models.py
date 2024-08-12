from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models

from book.models import Book
from users.models import User


# Create your models here.
class Review(models.Model):
    review_rating = models.IntegerField(validators = [MinValueValidator(0), MaxValueValidator(5)])
    review_content = models.CharField(max_length = 1000, null = False, blank = False)
    review_date = models.DateTimeField(auto_now_add = True)
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    book = models.ForeignKey(Book, on_delete = models.CASCADE)

    def __str__(self):
        return f"{self.book.title} | {self.user.username}"
