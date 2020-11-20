from django.urls import path
from . import views


urlpatterns = [
    path('themes/', views.Themeslist.as_view()),
    path('firstquiz/', views.FirQuizlist.as_view()),
    path('secondquiz/', views.SecQuizlist.as_view()),
    path('thirdquiz/', views.ThdQuizlist.as_view())
]
