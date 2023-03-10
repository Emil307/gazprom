from django.contrib import admin
from django.urls import path

from authentication.views import UserAPIRegistration, UserAPILogin, UsersAPIList, UserAPILogout, UserAPIDelete, \
    WellAppend, WellAPIView, CheckAppend, ChecksAPIView

urlpatterns = [
    path('admin', admin.site.urls),
    path('api/v1/userlist', UsersAPIList.as_view()),
    path('api/v1/login', UserAPILogin.as_view()),
    path('api/v1/registration', UserAPIRegistration.as_view()),
    path('api/v1/logout', UserAPILogout.as_view()),
    path('api/v1/deleteuser/<str:pk>', UserAPIDelete.as_view()),
    path('api/v1/getwells', WellAPIView.as_view()),
    path('api/v1/createwell', WellAppend.as_view()),
    path('api/v1/getchecks', ChecksAPIView.as_view()),
    path('api/v1/createcheck', CheckAppend.as_view())
]
