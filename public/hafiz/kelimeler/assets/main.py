import os
import shutil

ana_klasor = "ps"
for alt_klasor in os.listdir(ana_klasor):
    alt_klasor_yolu = os.path.join(ana_klasor, alt_klasor)
    if os.path.isdir(alt_klasor_yolu):
        for dosya in os.listdir(alt_klasor_yolu):
            dosya_yolu = os.path.join(alt_klasor_yolu, dosya)
            if os.path.isfile(dosya_yolu):
                shutil.move(dosya_yolu, ana_klasor)
        os.rmdir(alt_klasor_yolu)
