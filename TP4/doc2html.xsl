<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="doc">
        <html>
            <head>
                <meta charset="UTF-8"/>
                <link rel="stylesheet" href="w3.css"/>
                <title>
                    <xsl:value-of select="tit"/>
                </title>
            </head>
            <style>
                header{
                    font color="white";
                    color: white;
                    border-radius: 100px;
                }
                div{
                    border-radius: 100px;
                }
                .card {
                    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                    width: 100%;
                    border-radius: 100px;
                    text-align: center;
                    font color="white";
                    color: white;
                    background-color: black;
                }
            </style>
            <body>
                <div>
                    <header class="w3-container w3-center w3-padding-25 w3-black">
                        <h1><b><xsl:value-of select="tit"/></b></h1>
                    </header>
                </div>
                <xsl:apply-templates/>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="tit"/>
    
    <xsl:template match="prov">
        <div class="w3-content w3-justify w3-text-black w3-padding-35 w3-center">
            <h3><b>Região</b></h3>
            <xsl:apply-templates/>
        </div>
    </xsl:template>
    
    <xsl:template match="local">
        <div class="w3-content w3-justify w3-text-black w3-padding-35 w3-center">
            <h3><b>Local</b></h3>
            <xsl:apply-templates/>
        </div>
    </xsl:template>
    
    <xsl:template match="from">
        <div class="w3-content w3-justify w3-text-black w3-padding-35 w3-center w3-yellow">
            <h3><b>Origem</b></h3>
            <xsl:apply-templates/>
        </div>
    </xsl:template>
    
    <xsl:template match="prof">
        <div class="w3-content w3-justify w3-text-black w3-padding-35 w3-center w3-yellow">
            <h3><b>Profissão</b></h3>
            <xsl:apply-templates/>
        </div>
    </xsl:template>
    
    <xsl:template match="musico">
        <div class="w3-content w3-justify w3-text-black w3-padding-35 w3-center w3-green">
            <h3><b>Músico</b></h3>
            <xsl:apply-templates/>
        </div>
    </xsl:template>
    
    <xsl:template match="obs">
        <div class="w3-content w3-justify w3-text-black w3-padding-35 w3-center w3-green">
            <h3><b>Observações</b></h3>
            <xsl:apply-templates/>
        </div>
    </xsl:template>
    
    <xsl:template match="file">
        <div id="file" class="w3-content w3-justify w3-text-black w3-padding-35 w3-center w3-white">
            <h3><b>Ficheiro de audio</b></h3>
            <h5><b>Tipo de ficheiro</b></h5>
            <xsl:value-of select="@t"/>
            <h5><b>Descrição</b></h5>
            <xsl:value-of select="."/>
        </div>
    </xsl:template>

    <xsl:template match="duracao">
        <div class="w3-content w3-justify w3-text-black w3-padding-35 w3-center">
            <h3><b>Duração</b></h3>
            <xsl:apply-templates/>
       </div>
    </xsl:template>
    
    <xsl:template match="intxt">
        <div class="w3-content w3-justify w3-text-black w3-padding-35 w3-center">
            <h3><b>Instrumento +</b></h3>
            <xsl:apply-templates/>
        </div>
    </xsl:template>
    
    <xsl:template match="inst">
        <div class="w3-content w3-justify w3-text-black w3-padding-35 w3-center">
            <h3><b>Instrumento</b></h3>
            <xsl:apply-templates/>
        </div>
    </xsl:template>
</xsl:stylesheet>