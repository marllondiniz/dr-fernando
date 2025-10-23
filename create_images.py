#!/usr/bin/env python3
import base64
from PIL import Image, ImageDraw, ImageFont
import os

def create_placeholder_image(width, height, text, bg_color, text_color):
    """Cria uma imagem placeholder PNG simples"""
    img = Image.new('RGB', (width, height), bg_color)
    draw = ImageDraw.Draw(img)
    
    # Tenta usar uma fonte, senão usa a padrão
    try:
        font = ImageFont.truetype("/System/Library/Fonts/Arial.ttf", 24)
    except:
        font = ImageFont.load_default()
    
    # Calcula posição do texto
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    x = (width - text_width) // 2
    y = (height - text_height) // 2
    
    draw.text((x, y), text, fill=text_color, font=font)
    return img

# Cores da marca
colors = {
    'primary': (14, 165, 233),    # #0EA5E9
    'accent': (34, 197, 94),      # #22C55E
    'dark': (11, 18, 33),         # #0B1221
    'light': (241, 245, 249),     # #F1F5F9
    'white': (255, 255, 255),
    'gray': (107, 114, 128)       # #6B7280
}

# Criar diretórios se não existirem
os.makedirs('public/images/blog', exist_ok=True)

# Imagens principais
images = [
    ('public/images/hero-dr-fernando.jpg', 600, 600, 'Dr. Fernando Del Piero', colors['primary'], colors['white']),
    ('public/images/jejum-hormonal.jpg', 600, 400, 'Jejum Hormonal', colors['accent'], colors['white']),
    ('public/images/dr-fernando-profile.jpg', 400, 400, 'Dr. Fernando Profile', colors['dark'], colors['white']),
    ('public/images/jejum-hormonal-protocolo.jpg', 600, 400, 'Jejum Hormonal Protocolo', colors['accent'], colors['white']),
    ('public/images/saude-hormonal-protocolo.jpg', 600, 400, 'Saúde Hormonal Protocolo', colors['primary'], colors['white']),
    ('public/images/emagrecimento-protocolo.jpg', 600, 400, 'Emagrecimento Protocolo', colors['light'], colors['dark']),
    ('public/images/blog/jejum-guia.jpg', 400, 225, 'Jejum Metabólico Guia', colors['accent'], colors['white']),
    ('public/images/blog/menopausa.jpg', 400, 225, 'Menopausa Sintomas', colors['primary'], colors['white']),
    ('public/images/blog/emagrecimento.jpg', 400, 225, 'Emagrecimento', colors['light'], colors['dark']),
]

for path, width, height, text, bg_color, text_color in images:
    img = create_placeholder_image(width, height, text, bg_color, text_color)
    img.save(path, 'PNG')
    print(f'Criado: {path}')

print('Todas as imagens foram criadas com sucesso!')
