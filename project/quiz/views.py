from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework import viewsets, permissions
from .models import Secquiz, Theme
from .serializers import SecondQuizSerializer, ThemesSerializer
from rest_framework.views import APIView


class Quizlist(ListAPIView):
    queryset = Secquiz.objects.filter(topic='soc').order_by('?')
    serializer_class = SecondQuizSerializer


class Themeslist(APIView):
    queryset = Theme.objects.all()
    serializer_class = ThemesSerializer