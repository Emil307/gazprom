from rest_framework import serializers

from .models import GazpromUser, Well, Checks


class GazpromUserSerializer(serializers.ModelSerializer):
    # user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = GazpromUser
        fields = "__all__"


class WellSerializer(serializers.ModelSerializer):
    class Meta:
        model = Well
        fields = "__all__"


class CheckSerializer(serializers.ModelSerializer):
    class Meta:
        model = Checks
        fields = "__all__"
