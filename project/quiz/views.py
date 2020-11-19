from rest_framework.generics import ListAPIView, ListCreateAPIView
from .models import Firquiz, Secquiz, Thdquiz, Theme
from .serializers import FirstQuizSerializer, SecondQuizSerializer, ThirdQuizSerializer, ThemesSerializer


def filter_by_themes(unfiltered_query):
    size = len(Theme.objects.all())
    themeObject = vars(Theme.objects.all()[size - 1])
    themeChosen = []
    if themeObject["isChosen1"]:
        themeChosen.append("soc")
    if themeObject["isChosen2"]:
        themeChosen.append("tax")
    if themeObject["isChosen3"]:
        themeChosen.append("fam")
    if themeObject["isChosen4"]:
        themeChosen.append("state")
    queryset = unfiltered_query.objects.filter(topic=themeChosen[0])
    for i in range(1, len(themeChosen)):
        queryset |= unfiltered_query.objects.filter(topic=themeChosen[i])
    queryset = queryset.order_by('?')
    return queryset


class Themeslist(ListCreateAPIView):
    queryset = Theme.objects.all()
    serializer_class = ThemesSerializer


class FirQuizlist(ListAPIView):
    serializer_class = FirstQuizSerializer

    def get_queryset(self):
        return filter_by_themes(Firquiz)


class SecQuizlist(ListAPIView):
        serializer_class = SecondQuizSerializer

        def get_queryset(self):
            return filter_by_themes(Secquiz)


class ThdQuizlist(ListAPIView):
    serializer_class = ThirdQuizSerializer

    def get_queryset(self):
        return filter_by_themes(Thdquiz)
