/****** Script for SelectTopNRows command from SSMS  ******/
  
BULK INSERT Quran.dbo.SynTest --onyms
FROM 'C:\XFER\Dev\synonyms.csv'
WITH
(
FIELDTERMINATOR = ',',
ROWTERMINATOR = '\n'
)
GO

SELECT TOP 1000 [id]
      ,[topic]
      ,[topicUr]
      ,[count]
  FROM [Quran].[dbo].[Synonyms]