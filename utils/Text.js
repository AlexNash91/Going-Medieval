var config = {
    type: Phaser.AUTO,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#000',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload()
{
    this.load.image('village', 'https://previews.123rf.com/images/saphatthachat/saphatthachat1710/saphatthachat171000215/88621247-pixel-art-illustration-of-rural-village-on-winter-.jpg')
}

function create()
{
    const sprite = this.add.sprite(100, 100, 'village').setInteractive()
    sprite.setOrigin(0, 0).setScale(0.1)
    
    sprite.on('pointerover', () => {
        // Some options, you could add position, stylings etc
        const tooltip = { text: 'This is a nice village' }
        
        const tooltipX = sprite.getRightCenter().x - 20
        const tooltipY = sprite.y - 20
        const textPadding = 20
        
        const text = this.add.text(textPadding, textPadding, tooltip.text, { color: '#000' })
        const background = this.add.rectangle(0, 0, text.displayWidth + (textPadding * 2), text.displayHeight + (textPadding * 2), 0xffffff).setOrigin(0, 0)
        
        // Put both text and background in a cointainer to easily position them
        this.tooltipContainer = this.add.container(tooltipX, tooltipY)
        this.tooltipContainer.add(background)
        this.tooltipContainer.add(text)
    })
    
    sprite.on('pointerout', () => {
        // Hide or destroy tooltip when leaving sprite
        this.tooltipContainer.setVisible(false)
    })
}