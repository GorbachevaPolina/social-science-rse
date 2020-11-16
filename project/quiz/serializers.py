from rest_framework import serializers
from .models import Secquiz, Theme

class SecondQuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Secquiz
        fields = ('questionText', 'option1', 'option2', 'option3', 'option4', 'answerText',)

class ThemesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Theme
        fields = ('isChosen1', 'isChosen2', 'isChosen3', 'isChosen4')
