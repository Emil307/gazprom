from django.contrib import admin
from .models import GazpromUser, Well, Checks

admin.site.register(GazpromUser)
admin.site.register(Well)
admin.site.register(Checks)
