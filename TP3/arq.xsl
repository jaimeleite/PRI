<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="/">
        <xsl:result-document href="website/index.html">
            <html>
                <head>
                    <title>Arqueossítios</title>
                    <meta charset="UTF-8"></meta>
                </head>
                <body>
                    <h1>WebSite sobre arqueossítios</h1>
                    <ol>
                        <xsl:apply-templates/>
                    </ol>
                </body>
            </html>
        </xsl:result-document>
        
        <xsl:apply-templates mode="individual"/>
    </xsl:template>
    
    <xsl:template match="ARQELEM" mode="individual">
        <xsl:result-document href="website/{generate-id()}.html">
            <html>
                <head>
                    <title>Página Individual</title>
                    <meta charset="UTF-8"></meta>
                </head>
                <body>
                    <div style="background-color:#468b0e">
                        <h1><xsl:value-of select="IDENTI"/></h1>
                    </div>
                    <xsl:apply-templates/>
                    <hr width="40%"/>
                    <address>
                        <a href="index.html#{generate-id()}">Voltar ao índice</a>
                    </address>
                </body>
            </html>
        </xsl:result-document>
    </xsl:template>
        
        <xsl:template match="TIPO">
            <div style="border-top: solid lightgreen">
                <b>Tipo: </b>
                <xsl:value-of select="@ASSUNTO"/>
                <xsl:apply-templates/>
            </div>
        </xsl:template>
        
        <xsl:template match="QUADRO">
            <div style="border-top: solid lightgreen">
                <b>Quadro: </b><xsl:apply-templates/>
            </div>
        </xsl:template>
        
        <xsl:template match="DEPOSI">
            <div style="border-top: solid lightgreen">
                <b>Deposi: </b><xsl:apply-templates/>
            </div>
        </xsl:template>
        
        <xsl:template match="BIBLIO">
            <div style="border-top: solid lightgreen">
                <b>Biblio: </b><xsl:apply-templates/>
            </div>
        </xsl:template>
        
        <xsl:template match="TRAARQ">
            <div style="border-top: solid lightgreen">
                <b>Traarq: </b><xsl:apply-templates/>
            </div>
        </xsl:template>
        
        <xsl:template match="INTERP">
            <div style="border-top: solid lightgreen">
                <b>Interp: </b><xsl:apply-templates/>
            </div>
        </xsl:template>
        
        <xsl:template match="LUGAR">
            <div style="border-top: solid lightgreen">
                <b>Lugar: </b><xsl:apply-templates/>
            </div>
        </xsl:template>
        
        <xsl:template match="DATA">
            <div style="border-top: solid lightgreen">
                <b>Data: </b><xsl:apply-templates/>
            </div>
        </xsl:template>
        
        <xsl:template match="ACESSO">
            <div style="border-top: solid lightgreen">
                <b>Acesso: </b><xsl:apply-templates/>
            </div>
        </xsl:template>
        
        <xsl:template match="ALTITU">
            <div style="border-top: solid lightgreen">
                <b>Altitu: </b><xsl:apply-templates/>
            </div>
        </xsl:template>
        
        <xsl:template match="LATITU">
            <div style="border-top: solid lightgreen">
                <b>Latitu: </b><xsl:apply-templates/>
            </div>
        </xsl:template>
        
        <xsl:template match="AUTOR">
            <div style="border-top: solid lightgreen">
                <b>Autor: </b><xsl:apply-templates/>
            </div>
        </xsl:template>
        
        <xsl:template match="FREGUE">
            <div style="border-top: solid lightgreen">
                <b>Fregue: </b><xsl:apply-templates/>
            </div>
        </xsl:template>
        
        <xsl:template match="CONCEL">
            <div style="border-top: solid lightgreen">
                <b>Concel: </b><xsl:apply-templates/>
            </div>
        </xsl:template>
        
        <xsl:template match="DESARQ">
            <div style="border-top: solid lightgreen">
                <b>Desarq: </b><xsl:apply-templates/>
            </div>
        </xsl:template>
        
        <xsl:template match="LIGA">
            <a href="{@url}"><xsl:value-of select="."/></a>
        </xsl:template>
    
        <xsl:template match="CODADM">
            <div style="border-top: solid lightgreen">
                <b>Codadm: </b><xsl:apply-templates/>
            </div>
        </xsl:template>
        
        <xsl:template match="CRONO">
            <div style="border-top: solid lightgreen">
                <b>Crono: </b><xsl:apply-templates/>
            </div>
        </xsl:template>
        
        <xsl:template match="DESCRI">
            <div style="border-top: solid lightgreen">
                <b>Descri: </b><xsl:apply-templates/>
            </div>
        </xsl:template>
    
        <xsl:template match="IMAGEM">
            <div style="border-top: solid lightgreen">
                <b>Imagem: </b>
                <xsl:value-of select="@NOME"/>
                <xsl:apply-templates/>
            </div>
        </xsl:template>
    
        <xsl:template match="LONGIT">
            <div style="border-top: solid lightgreen">
                <b>Longit: </b><xsl:apply-templates/>
            </div>
        </xsl:template>
    
        <xsl:template match="IDENTI">
            <div style="border-top: solid lightgreen">
                <b>Identi: </b><xsl:apply-templates/>
            </div>
        </xsl:template>
    
        <xsl:template match="INTERE">
            <div style="border-top: solid lightgreen">
                <b>Intere: </b><xsl:apply-templates/>
            </div>
        </xsl:template>
    
        <xsl:template match="ARQELEM">
            <li id="{generate-id()}">
                <a href="{generate-id()}.html">
                    <xsl:value-of select="IDENTI"/>
                </a>
            </li>
        </xsl:template>
</xsl:stylesheet>