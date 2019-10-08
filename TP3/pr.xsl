<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="/">
        <html>
            <head>
                <meta charset="UTF-8"/>
                <title>
                    Manifesto
                </title>
            </head>
            <style>
                h1{
                    font-size:48px;
                }
                div{
                    border-top: solid blue;
                    text-align: justify;
                }
            </style>
            <body>
                <h1 style="margin-top:2cm" align="center"><span style="color:red">Manifesto</span></h1>
                <xsl:apply-templates/>
            </body>
        </html>
    </xsl:template>
    
    
    
    <xsl:template match="meta">
        <div style="margin:2cm">
            <h2><span style="color:red">Meta</span></h2>
            <table>
                <tr>
                    <th align="left">Key_name: </th><td><xsl:value-of select="keyname"/></td>
                </tr>
                <tr>
                    <th align="left">Title: </th><td><xsl:value-of select="title"/></td>
                </tr>
                <tr>
                    <th align="left">Subtitle: </th><td><xsl:value-of select="subtitle"/></td>
                </tr>
                <tr>
                    <th align="left">Inicial date: </th><td><xsl:value-of select="bdate"/></td>
                </tr>
                <tr>
                    <th align="left">End date: </th><td><xsl:value-of select="edate"/></td>
                </tr>    
            </table>
            <p><b><span style="color:red">Supervisor</span></b></p>
            <p align="left"><b>Name: </b><span style="float:right"><xsl:value-of select="supervisor/name"/></span></p>
            <p align="left"><b>Email: </b><xsl:value-of select="supervisor/email"/></p>
            <p align="left"><b>Homepage: </b><xsl:value-of select="supervisor/homepage"/></p>
        </div>
    </xsl:template>
    
    <xsl:template match="workteam">
        <div style="margin:2cm">
            <h2><span style="color:red">WorkTeam</span></h2>
            <table>
                <tr>
                    <th align="left">Number: </th><td><xsl:value-of select="member/identifier"/></td>
                </tr>
                <tr>
                    <th align="left">Name: </th><td><xsl:value-of select="member/name"/></td>
                </tr>
                <tr>
                    <th align="left">Email: </th><td><xsl:value-of select="member/email"/></td>
                </tr>
                <tr>
                    <th align="left">Photo: </th><td><xsl:value-of select="member/photo"/></td>
                </tr>
            </table>
         </div>
    </xsl:template>
    
    <xsl:template match="abstract">
        <div style="margin:2cm">
            <h2><span style="color:red">Abstracts</span></h2>
            <xsl:apply-templates/>
        </div>
    </xsl:template>
    
    <xsl:template match="deliverables">
        <div style="margin:2cm">
            <h2><span style="color:red">Deriverables</span></h2>
            <xsl:apply-templates/>
        </div>
    </xsl:template>
    
    <xsl:template match="deliverable">
        <li>
            <xsl:apply-templates />
        </li>
    </xsl:template>
    <xsl:template match="xref">
        <a href="{@url}"><xsl:value-of select="."/></a>
    </xsl:template>
</xsl:stylesheet>