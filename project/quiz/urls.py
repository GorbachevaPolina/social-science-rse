from django.urls import path, include
from . import views


urlpatterns = [
    path('secondquiz/', views.Quizlist.as_view()),
    path('themes/', views.Quizlist.as_view())
]
