<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="/">
        <html>
            <head>
                <title>
                    <xsl:value-of select="meta/keyname"/>
                    <meta charset="UTF-8"/>
                </title>
            </head>
            <style>
                div{
                    text-align: justify;
                }
            </style>
            <body>
                <xsl:apply-templates/>
            </body>
        </html>
    </xsl:template>
    
    <xsl:template match="meta">
        <div style="margin:2cm">
            <h2><xsl:value-of select="keyname"/></h2>
            <h1><xsl:value-of select="title"/></h1>
            <h2><xsl:value-of select="subtitle"/></h2>
            <h4><b>Inicial date: </b><xsl:value-of select="bdate"/></h4>
            <h4><b>End date: <xsl:value-of select="edate"/></b></h4>
        </div>
    </xsl:template>
    
    <xsl:template match="workteam">
        <div style="margin:2cm;background-color:lightblue">
            <h4><span style="color:green">WorkTeam</span></h4>
            <table>
                <tr>
                    <th>Number: </th><td style="padding:5px;"><xsl:value-of select="member/identifier"/></td>
                </tr>
                <tr>
                    <th>Name: </th><td style="padding:5px;"><xsl:value-of select="member/name"/></td>
                </tr>
                <tr>
                    <th>Email: </th><td style="padding:5px;"><xsl:value-of select="member/email"/></td>
                </tr>
                <tr>
                    <th>Photo: </th><td style="padding:5px;"><xsl:value-of select="member/photo"/></td>
                </tr>
            </table>
         </div>
    </xsl:template>
    
    <xsl:template match="abstract">
        <div style="margin:2cm">
            <h3>Abstract</h3>
            <xsl:apply-templates/>
        </div>
    </xsl:template> 
    
    <xsl:template match="deriverables">
        <p>
            <xsl:apply-templates/>
        </p>
    </xsl:template>
    
    <xsl:template match="deriverable">
        <div>
            <xsl:apply-templates />
        </div>
    </xsl:template>
</xsl:stylesheet>