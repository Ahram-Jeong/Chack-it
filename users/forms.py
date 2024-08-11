from django import forms
from django.contrib.auth.forms import UserCreationForm

from users.models import User


class CustomUserCreationForm(UserCreationForm):
    # 속성 추가
    email = forms.EmailField(label = "이메일")

    class Meta(UserCreationForm.Meta):
        model = User
        fields = ("username", "password1", "password2", "email")