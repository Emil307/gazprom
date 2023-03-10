from .models import GazpromUser, Well, Checks
from rest_framework import (generics, views)
from .serializers import GazpromUserSerializer, WellSerializer, CheckSerializer
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser, IsAuthenticated, AllowAny


class UsersAPIList(views.APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        return Response({'users': GazpromUserSerializer(GazpromUser.objects.all(), many=True).data})


class UserAPILogin(views.APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        return Response({"Прикол": "клёвый"})

    def post(self, request):
        login = request.data['login']
        password = request.data['password']
        try:
            user = GazpromUser.objects.get(login=login)
            if password == user.password:
                user.isLogin = True
                user.save()
                return Response(GazpromUserSerializer(user).data)
            else:
                return Response('ERROR: wrong password')
        except BaseException:
            return Response(f"ERROR: user -- {login} -- does not exist")


class UserAPILogout(views.APIView):
    permission_classes = [AllowAny]

    def get(self, reguest):
        return Response({"Прикол": "разрывной"})

    def post(self, request):
        login = request.data['login']
        try:
            user = GazpromUser.objects.get(login=login)
            user.isLogin = False
            user.save()
            return Response(f"Success")
        except BaseException:
            return Response(f"ERROR: user -- {login} -- does not exist")


class UserAPIRegistration(generics.CreateAPIView):
    queryset = GazpromUser.objects.all()
    serializer_class = GazpromUserSerializer
    permission_classes = [AllowAny]


class UserAPIDelete(generics.DestroyAPIView):
    queryset = GazpromUser.objects.all()
    serializer_class = GazpromUserSerializer
    permission_classes = [AllowAny]


class WellAppend(generics.CreateAPIView):
    queryset = Well.objects.all()
    serializer_class = WellSerializer
    permission_classes = [AllowAny]


class WellAPIView(views.APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        return Response({"wells": WellSerializer(Well.objects.all(), many=True).data})


class CheckAppend(generics.CreateAPIView):
    queryset = Checks.objects.all()
    serializer_class = CheckSerializer
    permission_classes = [AllowAny]


class ChecksAPIView(views.APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        return Response({"wells": CheckSerializer(Checks.objects.all(), many=True).data})
