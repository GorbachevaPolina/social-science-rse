from rest_framework.generics import ListAPIView, ListCreateAPIView
from rest_framework.response import Response
from rest_framework import viewsets, permissions
from .models import Secquiz, Theme
from .serializers import SecondQuizSerializer, ThemesSerializer
from rest_framework.views import APIView


class Quizlist(ListAPIView):
    chosenThemes = Theme.objects.filter(isChosen=True).values_list('theme', flat=True)
    queryset = Secquiz.objects.filter(topic=chosenThemes[0])
    for i in range(1, len(chosenThemes)):
        queryset |= Secquiz.objects.filter(topic=chosenThemes[i])
    queryset = queryset.order_by('?')
    serializer_class = SecondQuizSerializer


class Themeslist(ListCreateAPIView):
    queryset = Theme.objects.all()
    serializer_class = ThemesSerializer