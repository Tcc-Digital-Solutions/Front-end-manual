USE bankmanual;

SELECT * FROM languages;
INSERT INTO languages values(idLanguages, 'pt-BR');
INSERT INTO languages values(idLanguages, 'es-ES');

SELECT * FROM category;
INSERT INTO category VALUES(idCategory, 'Furadeira');

SELECT * FROM categories;
INSERT INTO categories VALUES(idCategories, 1, 1);

SELECT * FROM subtitlemontage;
INSERT INTO subtitlemontage values(idSubtitle, 'imagem de abacaxi', 1);
INSERT INTO subtitlemontage values(idSubtitle, 'imagen de piña', 2);

SELECT * FROM imgmontage;
INSERT INTO imgmontage values(idImgMontage, 'img_montage01.png');
INSERT INTO imgmontage values(idImgMontage, 'img_montage02.png');
INSERT INTO imgmontage values(idImgMontage, 'img_montage03.png');


SELECT * FROM subtitleimage;
INSERT INTO subtitleimage VALUES(idSubtitleImage, 1, 2);
INSERT INTO subtitleimage VALUES(idSubtitleImage, 1, 1);
INSERT INTO subtitleimage VALUES(idSubtitleImage, 3, 2);

SELECT * FROM montage;
INSERT INTO montage VALUES(idMontage, 'img_principal01', 1);
INSERT INTO montage VALUES(idMontage, 'img_principal01', 2);

SELECT * FROM product;
INSERT INTO product VALUES('4556159-000', 'img_principal.png', 'img_360.png', 1, 1);

SELECT * FROM productsinfo;
INSERT INTO productsinfo VALUES(idProd, 'Furadeira Angular', 'audio.mp3', 'equipamento de cor azul com textura plástica','4556159-000', 1);
INSERT INTO productsinfo VALUES(idProd, 'Esmerilhadeira', 'audio.mp3', 'equipamento de cor azul com textura plástica','4556159-000', 1);

SELECT * FROM content;
INSERT INTO content VALUES(idContent, '1 Furadeira GSB RE');
INSERT INTO content VALUES(idContent, '1 Manual de Instruções');
INSERT INTO content VALUES(idContent, '1 Limitador de profundidade');
INSERT INTO content VALUES(idContent, '1 Mala de Transporte');
INSERT INTO content VALUES(idContent, '1 Punho Auxiliar');

SELECT * FROM description;
INSERT INTO description VALUES(idDescription, 'Furadeira GSB 13 RE');
INSERT INTO description VALUES(idDescription, 'Manual de Instruções');
INSERT INTO description VALUES(idDescription, 'Limitador de Profundidade');
INSERT INTO description VALUES(idDescription, 'Chave de Mandril');

SELECT * FROM contentprods;
SELECT * FROM descriptionprods;

INSERT INTO contentprods VALUES(idContentProds, 1, 1);
INSERT INTO contentprods VALUES(idContentProds, 1, 2);
INSERT INTO contentprods VALUES(idContentProds, 1, 3);

INSERT INTO descriptionprods VALUES(idDescriptionProds, 1, 1);
INSERT INTO descriptionprods VALUES(idDescriptionProds, 1, 2);
INSERT INTO descriptionprods VALUES(idDescriptionProds, 1, 3);
INSERT INTO descriptionprods VALUES(idDescriptionProds, 1, 4);







